import axios from 'axios';
require('dotenv').config();
const { SERVER_PORT } = process.env;

const baseURL = `https://localhost:${SERVER_PORT}`;

export const api = axios.create({
  baseURL,
});

