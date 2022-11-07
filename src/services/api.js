import axios from 'axios';

//BASE URL - https://api.themoviedb.org/3
//URL DA API - https://api.themoviedb.org/3/movie/550?api_key=da3900640e0929bba00940390abb897c

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;