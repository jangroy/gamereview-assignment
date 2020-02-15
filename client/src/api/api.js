import axios from 'axios';

export const getPostsFromServer = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/posts')
      .then(response => {
        resolve(response.data.posts);
      })
      .catch(error => {
        console.log('error', error);
        reject();
      });
  });
};
