import axios from 'axios';

export const phonebookApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
