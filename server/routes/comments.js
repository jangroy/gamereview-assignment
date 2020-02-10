import express from 'express';
import * as controller from '../controllers/comments';
const router = express.Router();

router.get('/', controller.getAllComments);
router.get('/bypostid/:post_id', controller.getCommentsByPostId); // find out how to route queryStrings in another way
router.get('/:id', controller.getCommentById);
router.post('/', controller.createComment);
router.put('/:id', controller.updateCommentById);
router.delete('/:id', controller.deleteCommentById);

module.exports = router;
