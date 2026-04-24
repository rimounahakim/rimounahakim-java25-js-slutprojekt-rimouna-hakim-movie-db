// Visar filmer på sidan
export function displayMovies(movies) {
  const container = document.getElementById("movies");

  // Rensar
  container.innerHTML = "";

  // Loopar igenom filmer
  movies.slice(0, 10).forEach(movie => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${movie.title}</h3>
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
      <p>Release: ${movie.release_date}</p>
      <p>⭐ ${movie.vote_average}</p>
    `;

    container.appendChild(div);
  });
}