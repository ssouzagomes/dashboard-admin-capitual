import axios from 'axios';

const url = 'https://633740935327df4c43d22bb2.mockapi.io/api/v1';

export const api = axios.create({
  baseURL: url,
});
