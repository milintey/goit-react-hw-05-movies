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

export async function getCast(id) {
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&page=1&language=en`);
    return responce.data.cast;
}

export async function getReviews(id) {
    const responce = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&page=1&language=en`);
    return responce.data.results;
}

export async function searhMovies(query) {
    const responce = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1&language=en`);
    return responce.data.results;
}