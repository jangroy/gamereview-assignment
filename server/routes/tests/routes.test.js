const request = require('supertest');
const app = require('../../../app');

describe('Routes', () => {
  it('should get blog posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('posts');
  });
  it('should create a new blog post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({
        title: 'Testing title',
        article: 'Testing article long paragraphs here',
        author: 'Tester'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('post');
  });
});
