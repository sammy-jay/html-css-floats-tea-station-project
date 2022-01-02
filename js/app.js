const toggleBars = document.getElementById("fa-bars");
const toggleTimes = document.getElementById("fa-times");
const nav = document.querySelector(".nav-holder");
nav.classList.add("toggler");

toggleBars.addEventListener("click", () => {
  const nav = document.querySelector(".nav-holder");

  nav.classList.remove("toggler");
});
toggleTimes.addEventListener("click", () => {
  const nav = document.querySelector(".nav-holder");
  console.log(nav);
  nav.classList.add("toggler");
});
