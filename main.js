
let returnStatement = "testing output";



//Outputs the selected quote to UI
function deliverOutput() {
    document.getElementById("output").innerHTML += (`<h3>${returnStatement}</h3>`);
}