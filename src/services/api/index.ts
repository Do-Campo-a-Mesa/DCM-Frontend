import axios, { AxiosInstance } from 'axios';

const SERVER_PORT: number = import.meta.env.VITE_SERVER_PORT as number;

const baseURL: string = `http://localhost:${SERVER_PORT}`;

export const api: AxiosInstance = axios.create({
  baseURL,
});
