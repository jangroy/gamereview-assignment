import express from 'express';
import comments from './routes/comments';
import posts from './routes/posts';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/posts', posts);
server.use('/api/comments', comments);

module.exports = server;
