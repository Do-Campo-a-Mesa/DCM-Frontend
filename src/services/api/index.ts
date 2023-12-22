import axios, { AxiosInstance } from 'axios';

const SERVER_PORT: number = import.meta.env.SERVER_PORT as number;

const baseURL: string = `https://localhost:${SERVER_PORT}`;

export const api: AxiosInstance = axios.create({
  baseURL,
});
