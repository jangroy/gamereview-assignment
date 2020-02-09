import express from 'express';
import * as controller from '../controllers/posts';
const router = express.Router();

router.get('/', controller.getAllPosts);
router.get('/:id', controller.getPostById);
router.post('/', controller.getPostById);

module.exports = router;
