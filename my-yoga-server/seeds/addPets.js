const faker = require('faker');

// const createFakeDogs = () => ({
//   name: faker.name.firstName(),
//   species: "Dog",
//   imageUrl:
//   age:
//   description:
// })

// const createFakeCats = () => ({
//   name: faker.name.firstName(),
//   species: "Cat",
//   imageUrl:
//   age:
//   description:
// })

// const createFakeBirds = () => ({
//   name: faker.name.firstName(),
//   species: "Bird",
//   imageUrl:
//   age:
//   description:
// })

// const createFakeBunnies = () => ({
//   name: faker.name.firstName(),
//   species: "Bunny",
//   imageUrl:
//   age:
//   description:
// })



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};
