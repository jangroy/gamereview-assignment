import express from 'express';
import cors from 'cors';
import comments from './routes/comments';
import posts from './routes/posts';

const server = express();

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
// server.use(cors()); // make use of cors for production
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/api/posts', posts);
server.use('/api/comments', comments);

module.exports = server;
