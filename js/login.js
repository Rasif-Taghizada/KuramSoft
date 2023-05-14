// Select Js

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// Password visible
let password = document.querySelector("#password");
let eye = document.querySelector(".pass-eye > i")
let eyeContainer = document.querySelector(".pass-eye")
eyeContainer.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eye.classList.replace("fa-eye-slash", "fa-eye")
  }
  else {
    password.type = "password"
    eye.classList.replace("fa-eye", "fa-eye-slash")
  }
})


