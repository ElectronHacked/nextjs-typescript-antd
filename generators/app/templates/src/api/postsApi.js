import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchAllPostsApi = () =>
  axios
    .get(`${BASE_URL}/posts`)
    .then(response => response)
    .catch(error => error.response);

export const fetchPostCommentsApi = postId =>
  axios
    .get(`${BASE_URL}/posts/${postId}/comments`)
    .then(response => response)
    .catch(error => error.response);
