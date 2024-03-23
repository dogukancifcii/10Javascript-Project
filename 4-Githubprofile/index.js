const APIURL = "https://api.github.com/users/";
const def = "dogukancifcii";

const form = document.querySelector(".form");
const search = document.querySelector(".search");
const main = document.querySelector(".main");
githubData(def);

async function githubData(name) {
  const data = await fetch(APIURL + name);
  const githubData = await data.json();

  console.log(githubData);
  getProfile(githubData);
}

function getProfile(index) {
  main.innerHTML = `<div class="card">
    <div class="img">
      <img
        src=${index.avatar_url}
        alt=""
      />
    </div>
    <h2>${index.name}</h2>
    <p>
      ${index.bio ? index.bio : "Empty"}
    </p>
    <a class="profile-link" href="https://github.com/${
      index.login
    }">Github Profile
  </a>
  </div>
    `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = search.value;
  console.log(name);
  main.innerHTML = "";
  if (name) {
    githubData(name);
  }
  search.value = "";
});
