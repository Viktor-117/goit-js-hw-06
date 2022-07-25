const inputRef = document.querySelector("#validation-input");
let inputValue = "";

inputRef.addEventListener("input", (event) => {
  inputValue = event.currentTarget.value.length;
});

inputRef.addEventListener("blur", () => {
  if (inputValue === Number(inputRef.getAttribute("data-length"))) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});
