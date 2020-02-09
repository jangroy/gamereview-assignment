import express from 'express';
import * as controller from '../controllers/comments';
const router = express.Router();

router.get('/', controller.getAllComments);
router.get('/bypostid/:post_id', controller.getCommentsByPostId);
router.get('/:id', controller.getCommentById);
router.post('/', controller.createComment);

module.exports = router;