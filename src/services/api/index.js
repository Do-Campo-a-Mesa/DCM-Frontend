import axios from 'axios';
const SERVER_PORT = !!import.meta.env.SERVER_PORT;;

const baseURL = `https://localhost:${SERVER_PORT}`;

export const api = axios.create({
  baseURL,
});

