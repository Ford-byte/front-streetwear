import axios from 'axios';

// Configuration object to hold the base URL
const config = {
    baseURL: 'http://192.168.1.7:8000',
    // baseURL: 'https://g2hsmmkf-8000.asse.devtunnels.ms'
    // baseURL: 'https://s8b4sswl-8000.asse.devtunnels.ms'
    // baseURL: 'http://localhost:8000' // default value
};

const instance = axios.create({
    baseURL: config.baseURL
});

export default instance;
export const backLink = config.baseURL;