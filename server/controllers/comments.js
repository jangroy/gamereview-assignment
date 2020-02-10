import knex from '../../config/knex';

export const getAllComments = async (req, res) => {
  try {
    const comments = await knex('comments').select();

    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await knex('comments')
      .where({ post_id: req.params.post_id })
      .select();

    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const comment = await knex('comments')
      .where({ id: req.params.id })
      .select();

    return res.status(200).json({ comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createComment = async (req, res) => {
  try {
    let errorMessage = [];
    if (!req.query.author) {
      errorMessage.push('author');
    }
    if (!req.query.comment) {
      errorMessage.push('comment');
    }
    if (errorMessage.length > 0) {
      return res.status(500).json({ error: `Cannot post with empty ${errorMessage}` });
    }

    const comment = await knex('comments')
      .insert(req.query)
      .then(() => req.query);
    return res.status(201).json({ comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
