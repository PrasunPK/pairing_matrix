import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://dailysummary.herokuapp.com/'
});