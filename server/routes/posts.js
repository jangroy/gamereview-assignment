import express from 'express';
import * as controller from '../controllers/posts';
const router = express.Router();

router.get('/', controller.getAllPosts);
router.get('/:id', controller.getPostById);
router.post('/', controller.createPost);
router.put('/:id', controller.updatePostById);
router.delete('/:id', controller.deletePostById);

module.exports = router;
