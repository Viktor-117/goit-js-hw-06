function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsRef = document.querySelector("#controls");
const numberRef = document.querySelector("input");
const createBtnRef = document.querySelector("[data-create]");
const destroyBtnRef = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
let size = 20;
let growingSize = "";

const onCreateBtnClick = (event) => {
  event.preventDefault();
  createBoxes(Number(numberRef.value));
};
const onDestroyBtnClick = (event) => {
  event.preventDefault();
  destroyBoxes();
};

createBtnRef.addEventListener("click", onCreateBtnClick);
destroyBtnRef.addEventListener("click", onDestroyBtnClick);

function createBoxes(amount) {
  const boxesArr = [];
  for (let i = 1; i <= amount; i += 1) {
    growingSize = size + i * 10;
    const box = document.createElement("div");
    box.style.width = `${growingSize}px`;
    box.style.height = `${growingSize}px`;
    box.style.marginTop = "10px";
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
  }
  size = growingSize;
  boxesRef.append(...boxesArr);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
  size = 20;
}
