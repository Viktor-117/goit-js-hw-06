function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const outputText = document.querySelector(".color");

btnRef.addEventListener("click", onBtnClick);

function onBtnClick() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  outputText.textContent = randomColor;
}
