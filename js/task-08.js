const formRef = document.querySelector("form.login-form");
const p = document.querySelector("p");

formRef.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert();
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

function alert() {
  const alertText = document.createElement("p");
  alertText.textContent = "Заполните, пожалуйста, все поля!";
  alertText.style.color = "red";
  formRef.append(alertText);
}
