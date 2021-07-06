import axios from 'axios';

export const getSecretWord = (): any => {
  // TODO: write actual function in Redux section
  return axios.get('http://localhost:3030').then((response) => response.data);
};
