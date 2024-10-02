const login = document.getElementById("login");
const register = document.getElementById("register");
const entry = document.querySelector(".entry");

login.addEventListener("mouseenter", () => {
  login.style.background = "#f47439fb";
  register.style.background = "transparent";
});

register.addEventListener("mouseenter", () => {
  register.style.background = "#f47439fb";
  login.style.background = "transparent";
});

register.addEventListener("mouseleave", () => {
  register.style.background = "transparent";
  login.style.background = "#f47439fb";
});