const request = require('supertest');
const app = require('../../../app');

describe('Blog Post Routes', () => {
  it('should get blog posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('posts');
  });

  it('should create a new blog post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .query({
        title: 'testing title',
        article: 'testing article',
        author: 'post tester'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('post');
  });
});

describe('Comment Routes', () => {
  it('should get blog comments', async () => {
    const res = await request(app).get('/api/comments');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('comments');
  });

  it('should get comments by blog id', async () => {
    const res = await request(app).get('/api/comments/bypostid/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('comments');
  });

  it('should create a new comment', async () => {
    const res = await request(app)
      .post('/api/comments')
      .query({
        comment: 'testing comment',
        author: 'comment tester',
        post_id: 1
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('comment');
  });
});
