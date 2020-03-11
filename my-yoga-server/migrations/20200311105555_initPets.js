
exports.up = async function(knex, Promise) {
await knex.schema.createTable('pets', table => {
    table
    .increments('id')
    .primary();
    table.string('name').notNullable()
    table.string('species').notNullable()
    table.string('imageUrl').defaultTo('https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png')
    table.integer('age').notNullable()
    table.string('description').defaultTo('More info coming soon!')
    table.integer('price').notNullable()
})

.createTable('users', table => {
    table
      .increments('id')
      .primary();
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.boolean('admin').defaultTo('False')
  })
}
  

exports.down = function(knex) {
  
};


