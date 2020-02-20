import knex from '../../config/knex';

export const getAllPosts = async (req, res) => {
  try {
    const posts = await knex('posts')
      .select()
      .orderBy('id', 'desc');
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const getPostById = async (req, res) => {
  try {
    const post = await knex('posts')
      .where({ id: req.params.id })
      .select();
    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const createPost = async (req, res) => {
  try {
    let errorMessage = [];
    if (!req.query.author) {
      errorMessage.push('author');
    }
    if (!req.query.article) {
      errorMessage.push('article');
    }
    if (!req.query.title) {
      errorMessage.push('title');
    }
    if (errorMessage.length > 0) {
      return res.status(500).json({ error: `Cannot post with empty ${errorMessage}` });
    }

    const post = await knex('posts')
      .insert(req.query)
      .then(() => req.query);

    return res.status(201).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const post = await knex('posts')
      .update(req.query)
      .then(() => req.query);

    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deletePostById = async (req, res) => {
  try {
    await knex('posts')
      .where('id', req.params.id)
      .del();

    return res.status(200).json({ msg: `deleted post with id ${req.params.id}` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
