console.log("dynamic-interface");

var dataArray = {};

function readFruit() {
  const selectFruit = document.getElementById("select-fruit");
  console.log("[readFruit] select:", selectFruit);
  console.log("[readFruit] select.value:", selectFruit.value);

  document.getElementById("output-fruit").textContent = selectFruit.value;

  const tdAmount = document.getElementById("td-amount");
  tdAmount.style.display = "block";
}

function readAmount() {
  const inputAmount = document.getElementById("input-amount");
  console.log("[readInput] input:", inputAmount);
  console.log("[readInput] input.value:", inputAmount.value);

  document.getElementById("output-amount").textContent = inputAmount.value;
}

function clearValues() {
  console.log("[clearValues] clear (amount, fruits)");

  const tdAmount = document.getElementById("td-amount");
  const inputAmount = document.getElementById("input-amount");
  const outputAmount = document.getElementById("output-amount");

  const selectFruit = document.getElementById("select-fruit");
  const outputFruit = document.getElementById("output-fruit");

  tdAmount.style.display = "none";
  inputAmount.value = "0";
  outputAmount.textContent = "0";

  selectFruit.value = "";
  outputFruit.textContent = "--";
}
