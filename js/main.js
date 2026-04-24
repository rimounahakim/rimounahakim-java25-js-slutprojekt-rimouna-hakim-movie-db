import { getPopularMovies, getTopRatedMovies, searchMovies } from "./api.js";
import { displayMovies } from "./ui.js";

let currentMovies = [];

// Popular
async function showPopular() {
  currentMovies = await getPopularMovies();
  displayMovies(currentMovies);
}

// Top Rated
async function showTopRated() {
  currentMovies = await getTopRatedMovies();
  displayMovies(currentMovies);
}

// Search
async function handleSearch() {
  const input = document.getElementById("searchInput").value;

  if (input === "") {
    alert("Skriv något!");
    return;
  }

  currentMovies = await searchMovies(input);
  displayMovies(currentMovies);
}

// Sorting
function sortMovies(type) {
  let sorted = [...currentMovies];

  if (type === "az") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (type === "za") {
    sorted.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (type === "ratingAsc") {
    sorted.sort((a, b) => a.vote_average - b.vote_average);
  }

  if (type === "ratingDesc") {
    sorted.sort((a, b) => b.vote_average - a.vote_average);
  }

  displayMovies(sorted);
}

// Events
document.getElementById("popularBtn").addEventListener("click", showPopular);
document.getElementById("topBtn").addEventListener("click", showTopRated);
document.getElementById("searchBtn").addEventListener("click", handleSearch);

document.getElementById("sortSelect").addEventListener("change", (e) => {
  sortMovies(e.target.value);
});

// Start
showPopular();

// Enkel filmapp som använder TMDB API
// Visar popular, top rated, search och sortering