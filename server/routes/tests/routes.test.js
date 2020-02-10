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
    expect(res.body).toMatchObject({
      post: {
        title: 'testing title',
        article: 'testing article',
        author: 'post tester'
      }
    });
  });
  it('should update a blog post by post id', async () => {
    const res = await request(app)
      .put('/api/posts/:id')
      .send({ id: 1 })
      .query({
        title: 'updated title'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({ post: { title: 'updated title' } });
  });
  it('should delete a blog post by post id', async () => {
    const res = await request(app)
      .delete('/api/posts/:id')
      .send({ id: 1 });
    expect(res.statusCode).toEqual(200);
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
        post_id: '1'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject({
      comment: { comment: 'testing comment', author: 'comment tester', post_id: '1' }
    });
  });

  it('should update a blog comment by comment id', async () => {
    const res = await request(app)
      .put('/api/comments/:id')
      .send({ id: 1 })
      .query({
        comment: 'updated comment'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toMatchObject({ comment: { comment: 'updated comment' } });
  });
  it('should delete a blog comment by comment id', async () => {
    const res = await request(app)
      .delete('/api/comments/:id')
      .send({ id: 1 });
    expect(res.statusCode).toEqual(200);
  });
});
