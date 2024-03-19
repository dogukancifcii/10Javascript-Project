const btn = document.querySelector(".btn-bubble");

btn.addEventListener("mouseover", (event) => {
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;
  btn.style.setProperty("--positionX", x + "px");
  btn.style.setProperty("--positionY", y + "px");
});
