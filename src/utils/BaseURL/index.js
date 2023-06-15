import axios from 'axios';

// -- URL
const URL = "https://jsonplaceholder.typicode.com";



// -- axios instance
export const axiosInstance = axios.create({
    baseURL: URL
});