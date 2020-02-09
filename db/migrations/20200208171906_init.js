exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('posts', table => {
      table.increments('id');
      table.string('title');
      table.string('article');
      table.string('author');
    })
    .createTable('comments', table => {
      table.increments('id');
      table.string('comment');
      table.string('author');
      table
        .integer('post_id')
        .references('id')
        .inTable('posts');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts').dropTableIfExists('comments');
};
