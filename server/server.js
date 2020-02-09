import express from 'express';
import comments from './routes/comments';
import posts from './routes/posts';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use('/api/posts', posts);
server.use('/api/comments', comments);
server.use(function(req, res) {
  res.status(404);
});

module.exports = server;
