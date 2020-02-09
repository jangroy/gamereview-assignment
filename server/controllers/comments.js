import knex from '../../config/knex';

export const getAllComments = async (req, res, next) => {
  try {
    const comments = await knex('comments').select('*');

    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCommentById = async (req, res, next) => {
  try {
    const comment = await knex('comments')
      .where({ id: req.params.id })
      .select('*');

    return res.status(200).json({ comment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
