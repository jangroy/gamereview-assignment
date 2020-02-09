import knex from '../../config/knex';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await knex('posts').select('*');
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const getPostById = async (req, res) => {
  try {
    const post = await knex('posts')
      .where({ id: req.params.id })
      .select('*');
    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const createPost = async (req, res) => {
  try {
    const post = await knex('posts').insert(req.body);
    return res.status(201).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
