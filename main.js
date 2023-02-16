
let returnStatement = "testing output";



//Outputs the selected quote to UI
const output = document.createElement("h3");
const node = document.createTextNode(returnStatement);


const element = document.getElementById("output");
element.appendChild(output.appendChild(node));
