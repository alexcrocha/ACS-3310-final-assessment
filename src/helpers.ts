const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const fullName = (firstName: string, lastName: string) => `${capitalize(firstName)} ${capitalize(lastName)}`;

export default fullName;
