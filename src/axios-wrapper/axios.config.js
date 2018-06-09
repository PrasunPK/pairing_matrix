import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080/'
        : 'https://dailysummary.herokuapp.com/'
});