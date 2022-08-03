console.log("[dynamic-interface] init");

function test() {
  console.log("test");
}

var fruits = {
  banana: "0",
  apple: "0",
  kiwi: "0",
  orange: "0"
};

var storage = {};

console.log("[dynamic-interface] loadData(fruits)");
loadData(fruits);

function loadData(dataArray) {
  console.log("[loadData] dataArray:", dataArray);
  console.log("[loadData] dataArray.length:", dataArray.length);
  for (let item in dataArray) {
    const fruit = item;
    const amount = dataArray[item];
    console.log(`[loadData] fruit: '${fruit}' / amount: '${amount}'`);

    //? <option value="banana">banana</option>
    const selectFruit = document.getElementById("select-fruit");
    const option = document.createElement("option");
    option.innerText = fruit;
    option.value = fruit;
    selectFruit.appendChild(option);
  }
}

function readFruit() {
  const selectFruit = document.getElementById("select-fruit");
  // console.log("[readFruit] selectFruit:", selectFruit);
  console.log("[readFruit] selectFruit.value:", selectFruit.value);

  console.log("[readFruit] update output-fruit");
  document.getElementById("output-fruit").textContent = selectFruit.value;

  const tdAmount = document.getElementById("td-amount");
  tdAmount.style.display = "block";
}

function readAmount() {
  const inputAmount = document.getElementById("input-amount");
  // console.log("[readAmount] inputAmount:", inputAmount);
  console.log("[readAmount] inputAmount.value:", inputAmount.value);

  const tdSave = document.getElementById("td-save");

  if (inputAmount.value != "") {
    console.log("[readAmount] update output-amount");
    document.getElementById("output-amount").textContent = inputAmount.value;

    console.log("[readAmount] show tdSave"); //!
    tdSave.style.display = "block"; //!
    // if (parseInt(inputAmount.value) != 0) {
    //!   console.log("[readAmount] show tdSave");
    //!   tdSave.style.display = "block";
    // } else {
    //   console.log("[readAmount] hide tdSave");
    //   tdSave.style.display = "none";
    // }
  } else {
    console.log("[readAmount] hide tdSave && reset output");
    inputAmount.value = "0";
    document.getElementById("output-amount").textContent = "0";
    tdSave.style.display = "none";
  }
}

function clearValues() {
  console.log("[clearValues] clear (fruits, fruit, amount, save)");

  fruits = {
    banana: "0",
    apple: "0",
    kiwi: "0",
    orange: "0"
  };

  console.log("[clearValues] fruits", fruits);

  const selectFruit = document.getElementById("select-fruit");
  const outputFruit = document.getElementById("output-fruit");

  selectFruit.value = "";
  outputFruit.textContent = "--";

  const tdAmount = document.getElementById("td-amount");
  const inputAmount = document.getElementById("input-amount");
  const outputAmount = document.getElementById("output-amount");

  tdAmount.style.display = "none";
  inputAmount.value = "0";
  outputAmount.textContent = "0";

  const tdSave = document.getElementById("td-save");
  tdSave.style.display = "none";
}

function saveValues(dataArray) {
  const fruit = document.getElementById("select-fruit").value;
  const amount = document.getElementById("input-amount").value;
  console.log(`[saveValues] fruit: '${fruit}' / amount: '${amount}'`);

  console.log("[saveValues] (BEFORE) dataArray", dataArray);
  dataArray[fruit] = amount;
  console.log("[saveValues] (AFTER) dataArray", dataArray);

  console.log("[saveValues] storage", storage);
}
