
exports.up = async function(knex, Promise) {
await knex.schema.createTable('pets', table => {
    table
    .increments('id')
    .primary();
    table.string('name')
    table.string('species')
    table.string('imageUrl').defaultTo('https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png')
    table.integer('age')
    table.string('description').defaultTo('More info coming soon!').notNullable()
    table.integer('adoptionFee')
})

.createTable('users', table => {
    table
      .increments('id')
      .primary();
    table.string('firstName')
    table.string('lastName')
    table.string('email').unique()
    table.string('password')
    table.string('address')
    table.string('address2')
    table.string('city')
    table.string('state')
    table.integer('zipcode')
    table.string('rentOrOwn')
    table.boolean('isAdmin').defaultTo('False')
  })
}
  

exports.down = function(knex) {
  
};


