import axios from 'axios';

export const baseHTTP = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params : {
        api_key : '7c4829680c5dc82e506e4cf962a26187' ,
        language : 'en-US'
    }
});