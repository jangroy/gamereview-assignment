const faker = require('faker');

const HOW_MANY_TO_SEED = 45;
let posts = [];

for (let i = 0; i < HOW_MANY_TO_SEED; i++) {
  let randomPost = { id: i + 1, author: 'Avid Video Game Reviewer', title: faker.lorem.sentence(), article: faker.lorem.paragraph() };
  posts.push(randomPost);
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('posts').insert(posts);
    });
};
