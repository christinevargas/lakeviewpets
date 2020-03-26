const faker = require('faker');
const { dogImages, catImages, birdImages, bunnyImages } = require('../utils/petImages')

const createFakeDogs = () => ({
  name: faker.name.firstName(),
  species: "Dog",
  age: faker.random.number(6),
  imageUrl: faker.random.objectElement(dogImages),
  description: faker.lorem.sentence(),
  adoptionFee: faker.random.number({
    min: 50,
    max: 50
  })
})

const createFakeCats = () => ({
  name: faker.name.firstName(),
  species: "Cat",
  age: faker.random.number(15),
  imageUrl: faker.random.objectElement(catImages),
  description: faker.lorem.sentence(),
  adoptionFee: faker.random.number({
    min: 50,
    max: 50
  }),
})

const createFakeBirds = () => ({
  name: faker.name.firstName(),
  species: "Bird",
  age: faker.random.number(10),
  imageUrl: faker.random.objectElement(birdImages),
  description: faker.lorem.sentence(),
  adoptionFee: faker.random.number({
    min: 50,
    max: 50
  }),
})

const createFakeBunnies = () => ({
  name: faker.name.firstName(),
  species: "Bunny",
  age: faker.random.number(10),
  imageUrl: faker.random.objectElement(bunnyImages),
  description: faker.lorem.sentence(),
  adoptionFee: faker.random.number({
    min: 50,
    max: 50
  }),
})


//Start Code:
// exports.seed = function(knex) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };


//SEED DOGS

// exports.seed = async function(knex, Promise) {
//   const fakeDogs = [];
//   const desiredFakeDogs = 20;

//   for(let i = 0; i < desiredFakeDogs; i++) {
//     fakeDogs.push(createFakeDogs());
//   }
//   await knex("pets").insert(fakeDogs)
// };

// SEED CATS

// exports.seed = async function(knex, Promise) {
//   const fakeCats = [];
//   const desiredFakeCats = 20;

//   for(let i = 0; i < desiredFakeCats; i++) {
//     fakeCats.push(createFakeCats());
//   }
//   await knex("pets").insert(fakeCats)
// };


//SEED BIRDS

// exports.seed = async function(knex, Promise) {
//   const fakeBirds = [];
//   const desiredFakeBirds = 20;

//   for(let i = 0; i < desiredFakeBirds; i++) {
//     fakeBirds.push(createFakeBirds());
//   }
//   await knex("pets").insert(fakeBirds)
// };

//SEED BUNNIES 

exports.seed = async function(knex, Promise) {
  const fakeBunnies = [];
  const desiredFakeBunnies = 20;

  for(let i = 0; i < desiredFakeBunnies; i++) {
    fakeBunnies.push(createFakeBunnies());
  }
  await knex("pets").insert(fakeBunnies)
};
