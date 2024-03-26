const noteBtn = document.querySelector(".noteBtn");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((a) => {
    addNote(a);
  });
}

noteBtn.addEventListener("click", () => {
  addNote();
});

function addNote(index = "") {
  const notes = document.createElement("div");
  notes.classList.add("note");

  notes.innerHTML = `
   
      <div class="buttons">
        <button class="edit">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button class="delete">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <main class="hidden"></main>
      <textarea></textarea>
    
  `;
  const main = notes.querySelector("main");
  const textarea = notes.querySelector("textarea");
  const delEl = notes.querySelector(".delete");
  const editEl = notes.querySelector(".edit");

  delEl.addEventListener("click", () => {
    notes.remove();
    storeText();
  });

  editEl.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    const text = e.target;
    main.innerHTML = marked(text.value);
    storeText();
  });
  document.body.appendChild(notes);
  textarea.value = index;
  main.textContent = marked(index);
}

function storeText() {
  const textArea = document.querySelectorAll("textarea");
  let notes = [];

  textArea.forEach((index) => {
    notes.push(index.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
