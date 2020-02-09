import express from 'express';
import * as controller from '../controllers/comments';
const router = express.Router();

router.get('/', controller.getAllComments);
router.get('/:id', controller.getCommentById);

module.exports = router;
