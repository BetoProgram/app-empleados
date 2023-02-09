import axios, { AxiosRequestConfig } from 'axios';

const httpConfig = axios.create({
    baseURL: 'http://localhost:5108/api',
    headers: {
        'Content-Type': 'application/json',
    }
})

export default httpConfig;