import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://monportfolio-str-api.onrender.com/api'
});

export const api_verify_mail = axios.create({
  baseURL: 'https://api.hunter.io/v2',
});

export const api_key = '8a3994eae747af08965f619e9eb019f3cd89f3c9';



