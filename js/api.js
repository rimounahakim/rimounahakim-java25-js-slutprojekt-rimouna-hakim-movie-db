// API key från TMDB (byt till din egen!)
const API_KEY = "1dbaeef8e2af3ba9f76e66d90c858fe0";

// Bas URL
const BASE_URL = "https://api.themoviedb.org/3";

// Hämtar populära filmer
export async function getPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

// Hämtar top rated filmer
export async function getTopRatedMovies() {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
}

// Söker filmer
export async function searchMovies(query) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await res.json();
  return data.results;
}