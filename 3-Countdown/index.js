const dSeconds = document.getElementById("d-5");
const dMinutes = document.getElementById("d-4");
const dHours = document.getElementById("d-3");
const dDays = document.getElementById("d-2");
const dMonths = document.getElementById("d-1");

const newYearDate = "1 Jan 2025";
function newYear() {
  const newYearTime = new Date(newYearDate);
  const currentDate = new Date();

  const totalMs = newYearTime - currentDate;
  const second = Math.floor(totalMs / 1000) % 60;
  const minutes = Math.floor(totalMs / 1000 / 60) % 60;
  const hours = Math.floor(totalMs / 1000 / 60 / 60) % 24;
  const days = Math.floor(totalMs / 1000 / 60 / 60 / 24) % 30;
  const mounts = Math.floor(totalMs / 1000 / 60 / 60 / 24 / 30);

  dSeconds.innerHTML = correction(second);
  dMinutes.innerHTML = correction(minutes);
  dHours.innerHTML = correction(hours);
  dDays.innerHTML = correction(days);
  dMonths.innerHTML = mounts;

  function correction(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
}

setInterval(newYear, 1000);
