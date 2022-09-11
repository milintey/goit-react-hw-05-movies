import axios from "axios";

const API_KEY = '6bfe9e7136eb9b0c49a32900d57df98b';

export async function trendingMovies() {
    const responce = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1&language=en`);
    return responce.data.results;
}

export async function getMovie(id) {
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&page=1&language=en`);
    return responce.data;
}