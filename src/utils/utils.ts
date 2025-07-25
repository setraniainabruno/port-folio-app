import axios from 'axios';


export const api: any = () => {
  axios.create({
    baseURL: 'http://localhost:3723/api'
  });
}

export const api_verify_mail: any = () => {
  axios.create({
    baseURL: 'https://api.hunter.io/v2'
  });
}

export const api_key: any = () => {
  return '8a3994eae747af08965f619e9eb019f3cd89f3c9';
}


