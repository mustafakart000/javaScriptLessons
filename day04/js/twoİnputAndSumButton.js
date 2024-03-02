function calculate() {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");
  const total = document.querySelector("#result");
  total.innerHTML += Number(num1.value) + Number(num2.value);
}
