const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const search = document.querySelector(".search");
const main = document.querySelector("main");
const form = document.querySelector(".form");
movie(APIURL);

async function movie(url) {
  const db = await fetch(url);
  const dbjson = await db.json();
  console.log(dbjson);
  getMovie(dbjson.results);
}
function getMovie(data) {
  main.innerHTML = "";
  data.forEach((item) => {
    if (item.poster_path !== null) {
      const movieEl = document.createElement("div");

      movieEl.classList.add("movie");
      movieEl.innerHTML = `
        <div id="movie">
        <div id="image">
          <img
            src=${IMGPATH + item.poster_path}
            alt=""
          />
        </div>
        <div class="movie-title">
          <h2>${item.title}</h2>
          <div class="category">
            <i class="fa-solid fa-star"></i><span>${item.vote_average.toFixed(
              1
            )} ❘ Action • Movie</span>
          </div>
        </div>
        <div class="overview">
        <h3>Overview:</h3>
        <p>${item.overview}</p>
          </div>
      </div> `;
      main.appendChild(movieEl);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchVal = search.value;

  movie(SEARCHAPI + searchVal);
  search.value = "";
});
