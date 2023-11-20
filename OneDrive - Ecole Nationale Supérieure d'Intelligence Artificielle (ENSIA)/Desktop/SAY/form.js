const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const main = document.getElementById("main");

signUpButton.addEventListener("click", () => {
  main.classList.add("right-panel-active");
  console.log("executed");
});

signInButton.addEventListener("click", () => {
  main.classList.remove("right-panel-active");
  console.log("executed");
});
