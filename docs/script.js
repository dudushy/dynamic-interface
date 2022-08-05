console.log("[dynamic-interface] init");

function test() {
  console.log("test");
}

var fruits = {
  banana: "1",
  apple: "0",
  kiwi: "2",
  orange: "5"
};

var storage = {};

// console.log("[dynamic-interface] loadData(fruits)");
loadData(fruits);

// displayItems(fruits);

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

  storage = {};
  console.log("[clearValues] storage", storage);

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
  console.log("[clearValues] fruit");

  const tdAmount = document.getElementById("td-amount");
  const inputAmount = document.getElementById("input-amount");
  const outputAmount = document.getElementById("output-amount");

  tdAmount.style.display = "none";
  inputAmount.value = "0";
  outputAmount.textContent = "0";
  console.log("[clearValues] amount");

  const tdSave = document.getElementById("td-save");
  tdSave.style.display = "none";
  console.log("[clearValues] save");
}

function saveValues(dataArray) {
  const fruit = document.getElementById("select-fruit").value;
  const amount = document.getElementById("input-amount").value;
  console.log(`[saveValues] fruit: '${fruit}' / amount: '${amount}'`);

  console.log("[saveValues] (BEFORE) dataArray", dataArray);
  dataArray[fruit] = amount;
  console.log("[saveValues] (AFTER) dataArray", dataArray);

  console.log("[saveValues] storage", storage);

  displayItems(dataArray);
}

function displayItems(dataArray) {
  console.log("[displayItems] dataArray", dataArray);

  const table = document.getElementById("table-output");

  let AorB = true;

  //? Clear table childs
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  for (const [fruit, amount] of Object.entries(dataArray)) {
    console.log(`[displayItems] fruit: ${fruit} | amount: ${amount}`);
    console.log(`[displayItems] AorB: ${AorB}`);

    const tr = document.createElement("tr");
    const tdFruit = document.createElement("td");
    const tdAmount = document.createElement("td");
    const tdOptions = document.createElement("td");
    const spanFruit = document.createElement("span");
    const spanAmount = document.createElement("span");
    const buttonRemove = document.createElement("button");
    const buttonEdit = document.createElement("button");
    const imgRemove = document.createElement("img");
    const imgEdit = document.createElement("img");

    if (amount != 0) {
      //? tdFruit
      spanFruit.innerText = fruit;
      tdFruit.appendChild(spanFruit);

      //? tdAmount
      spanAmount.innerText = amount;
      tdAmount.appendChild(spanAmount);

      //? tdOptions
      imgEdit.src = "imgs/create-outline.svg";
      imgEdit.classList.add("img-edit");
      buttonEdit.appendChild(imgEdit);
      buttonEdit.classList.add("button-edit");
      tdOptions.appendChild(buttonEdit);

      imgRemove.src = "imgs/trash-outline.svg";
      imgRemove.classList.add("img-remove");
      buttonRemove.appendChild(imgRemove);
      buttonRemove.classList.add("button-remove");
      tdOptions.appendChild(buttonRemove);

      //? tr
      tr.appendChild(tdFruit);
      tr.appendChild(tdAmount);
      tr.appendChild(tdOptions);
      tr.classList.add("tr-item");
      tr.classList.add(`color-${(AorB) ? "A" : "B"}`);
      table.appendChild(tr);

      //? toggle colors
      AorB = !AorB;
    }
  }
}
