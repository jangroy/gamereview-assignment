const faker = require('faker');

const HOW_MANY_TO_SEED = 5;
let comments = [];

for (let i = 0; i < HOW_MANY_TO_SEED; i++) {
  let randomComment = { id: i + 1, author: faker.internet.userName(), comment: faker.lorem.sentence(), post_id: i + 1 };
  comments.push(randomComment);
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('comments').insert(comments);
    });
};
