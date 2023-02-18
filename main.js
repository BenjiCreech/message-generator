
//Store quote arrays
const schmidtQuotes = [];
const nickQuotes = [];
const jessQuotes = [];
const ceceQuotes = [];
const winstonQuotes = [];
const coachQuotes = [];


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

//Outputs the selected quote to UI
function deliverOutput() {
    let characterToQuote = selectCharacter();
    let myQuote = selectQuote(characterToQuote);
    document.getElementById('output').innerHTML = myQuote;
}


