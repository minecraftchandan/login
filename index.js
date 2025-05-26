const container = document.getElementById("container");
const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

goRegister.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.add("active");
});

goLogin.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("active");
});
