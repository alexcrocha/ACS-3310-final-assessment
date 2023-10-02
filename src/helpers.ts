const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const fullName = (firstName: string, lastName: string) => `${capitalize(firstName)} ${capitalize(lastName)}`;

const formatPhone = (rawPhone: string | number | null) => {
  let phone = rawPhone;
  if (typeof phone === 'number') {
    phone = phone.toString();
  }
  if (!phone) {
    return '() -';
  }
  const area = phone.slice(0, 3);
  const three = phone.slice(3, 6);
  const four = phone.slice(6, 10);
  return `(${area}) ${three}-${four}`;
};

export default { fullName, formatPhone };
