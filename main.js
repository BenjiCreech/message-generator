
let returnStatement = "testing output";



//Outputs the selected quote to UI
const output = document.createElement("h3");
const node = document.createTextNode(returnStatement);
output.appendChild(node);

const element = document.getElementById("output");
element.appendChild(output);
