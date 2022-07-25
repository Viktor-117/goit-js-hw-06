let counterValue = 0;

const counterRef = document.querySelector("#value");
const incrementButtonRef = document.querySelector("[data-action = 'increment'");
const decrementButtonRef = document.querySelector("[data-action = 'decrement'");

incrementButtonRef.addEventListener("click", onIncrementButtonClick);
decrementButtonRef.addEventListener("click", onDecrementButtonClick);

function onIncrementButtonClick() {
  counterValue += 1;
  counterRef.textContent = counterValue;
}

function onDecrementButtonClick() {
  counterValue -= 1;
  counterRef.textContent = counterValue;
}
