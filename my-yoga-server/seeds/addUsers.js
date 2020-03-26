const faker = require('faker');

const createFakeUsers = () => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    address2: faker.address.secondaryAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipcode: faker.random.number({min:00000, max:99999}),
    rentOrOwn: faker.random.objectElement(["Rent", "Own"]),
    isAdmin: faker.random.boolean()
  })

  // SEED USERS 

exports.seed = async function(knex, Promise) {
  const fakeUsers = [];
  const desiredFakeUsers = 50;

  for(let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUsers());
  }
  await knex("users").insert(fakeUsers)
};