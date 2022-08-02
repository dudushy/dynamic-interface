console.log("dynamic-interface");

var dataArray = {};

function readSelect() {
    const select = document.getElementById("fruits");
    console.log("[readSelect] select:", select);
    console.log("[readSelect] select.value:", select.value);
}

function readInput() {
    const input = document.getElementById("amount").value;
    console.log("[readInput] input:", input);

    document.getElementById("output").textContent = input;
}
