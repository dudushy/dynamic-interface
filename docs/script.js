console.log("dynamic-interface");

function readInput() {
    const input = document.getElementById("raw_input").value;
    console.log("[readInput] input:", input);

    document.getElementById("output").textContent = input;
}
