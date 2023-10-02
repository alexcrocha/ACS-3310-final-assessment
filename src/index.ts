// eslint-disable-next-line import/no-extraneous-dependencies
const moment = require('moment');
const rawData = require('../data.json');
const { fullName, formatPhone, capitalize } = require('./helpers').default;

interface CustomerInfo {
  id: number;
  first_name: string;
  last_name: string;
  purchased: string;
  lastpayment: string;
  phone: string;
  make: string;
  model: string;
  city: string;
}

interface TransformedCustomerInfo {
  name: string;
  vehicle: string;
  purchased: string;
  lastPayment: string;
  phone: string;
  city: string;
}

const data = rawData.map((item: CustomerInfo): TransformedCustomerInfo => {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    first_name, last_name, phone, make, model, city, lastpayment, purchased,
  } = item;

  return {
    name: fullName(first_name, last_name),
    vehicle: fullName(make, model),
    purchased: moment(purchased).format('ll'),
    lastPayment: moment(lastpayment).fromNow(),
    phone: formatPhone(phone),
    city: capitalize(city),
  };
});

data.forEach((el: TransformedCustomerInfo) => {
  // eslint-disable-next-line no-console
  console.log(`\n${el.name}\n${el.vehicle}\nPurchased: ${el.purchased}\nLast Payment: ${el.lastPayment}\nPhone: ${el.phone}\nCity: ${el.city}`);
});
