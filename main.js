
//Store quote arrays
const schmidtQuotes = [];
const nickQuotes = [];
const jessQuotes = [];
const ceceQuotes = [];
const winstonQuotes = [];
const coachQuotes = [];

//Set intital Variables
let characterToQuote = selectCharacter();
let output = characterToQuote;
let returnStatement = "<h3>" + selectCharacter() + "</h3>";

//Randomly selects character to quote
function selectCharacter() {
    const randomNum = Math.floor(Math.random() * 6);
    const charArray = ["Schmidt", "Nick", "Jess", "Cece", "Winston", "Coach"];
    return charArray[randomNum];
}

//Random quote from selected character
function selectQuote(name) {
    const randomNum = Math.floor(Math.random() * 10);

    switch(name) {
        case 'Schmidt':
            return schmidtQuotes[randomNum];
            break;
        case 'Nick':
            return nickQuotes[randomNum];
            break;
        case 'Jess':
            return jessQuotes[randomNum];
            break;
        case 'Cece':
            return ceceQuotes[randomNum];
            break;
        case 'Winston':
            return winstonQuotes[randomNum];
            break;
        case 'Coach':
            return coachQuotes[randomNum];
            break;
        default:
            break;
    }
}


//Event Listener
let btn = document.getElementById("button");
btn.addEventListener("click", deliverOutput);


//Outputs the selected quote to UI
function deliverOutput() {
    const elem = document.getElementById('output').appendChild('h3');
    elem.innerHTML += (returnStatement);
}


