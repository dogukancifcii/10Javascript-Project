const input = document.querySelector(".text");

const ulList = document.querySelector(".list");

//local store load function
window.addEventListener("load", () => {
  const storedTasks = JSON.parse(localStorage.getItem("list")) || [];
  storedTasks.forEach((list) => {
    todolist(list.value, list.checked);
  });
});

//Task submit
document.addEventListener("submit", (event) => {
  event.preventDefault();
  todolist(input.value);
  input.value = "";
  listStore();
});

//html function
function todolist(inputValue, checked = false) {
  const listItem = `<li class="list-item ${checked ? "checked" : ""}">
  <p>${inputValue}</p>

  <div class="icons">
    <i class="fa-solid fa-thumbs-up"></i>
    <i class="fa-solid fa-delete-left"></i>
  </div>
</li>`;
  document.querySelector(".list");
  ulList.insertAdjacentHTML("beforeend", listItem);
}

//checked and delete event

ulList.addEventListener("click", (event) => {
  const targetElement = event.target;
  if (targetElement.classList.contains("fa-thumbs-up")) {
    const listItem = targetElement.closest(".list-item");
    listItem.classList.toggle("checked");
    listStore();
  }
  if (targetElement.classList.contains("fa-delete-left")) {
    const listItem = targetElement.closest(".list-item");
    listItem.remove();
    listStore();
  }
});

//local store function
function listStore() {
  let list = [];

  document.querySelectorAll(".list-item").forEach((item) => {
    const value = item.querySelector("p").textContent;
    const checked = item.classList.contains("checked");
    list.push({ value, checked });
  });
  localStorage.setItem("list", JSON.stringify(list));
}
