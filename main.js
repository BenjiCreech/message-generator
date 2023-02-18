
//Store quote arrays
const schmidtQuotes = [
    "Well, you have found my flabbergast button, and guess what? You've pressed it",
    "Youths!",
    "Do you just walk around all day thinking about other people's feelings? How do you get anything done?",
    "I'm not being overdramatic when I say I would rather sit naked on a hot grill than wear something off the rack.",
    "Can I take a moment to celebrate me?",
    "It was like listening to a rescue crew trying to communicate with a stranded miner. Are you ok? Yeah. Are you ok? Yeah!",
    "Bathtubs are medieval filth cauldrons… I'm not interested in simmering in testicle tea for 20 minutes.",
    "I can't talk right now. I'm writing a strongly worded e-mail to my florist.",
    "I don't have sperms. I have tadpoles… of the gods.",
    "Now, if you'll excuse me, I have to go water my succulents."
];

const nickQuotes = [
    "Do I regret it? Yes. Would I do it again? Probably.",
    "I'd give you a hug, but my shirt smells pretty weird today.",
    "Sandwiches and sex!? I want that!",
    "I want to go in my room and do weird stuff on my computer.",
    "I know this isn't gonna end well, but the middle part is gonna be awesome.",
    "I have decided to give up on women and put all of that energy into tomatoes.",
    "I'm like a mailman, but instead of mail, it's hot sex that I deliver.",
    "Sticky Nicky eats anything and I don't get sick.",
    "If I can't have a kid with a woman, then maybe I'll have one with my cousin.",
    "We can't break up if I don't hear you. No! La, la, la, la."
];

const jessQuotes = [
    "Boob season's over, for you!",
    "My boyfriend doesn't believe in banks. It's early in the relationship. I'm still shaving above the knee. Know what I mean?",
    "Them's joint bank account eyes.",
    "Do not challenge me to a sex stand-off. I can channel all of my sexual energy into knitting. How do you think I made it through high school?",
    "I know you're not a stripper, but is there any way you can take your short pants off?",
    "Everyone has had sex in my room!",
    "Oh my gosh. Look, it's food. I love food.",
    "I'm only attracted to guys who are afraid of success and think someone famous stole their idea.",
    "I'm gonna end up alone. I'm gonna be a single old lady, flashing people on the subway.",
    "I feel like I want to murder someone, and also I want soft pretzels."
];

const ceceQuotes = [
    "I know you have more costumes in your closet.",
    "This isn't another one of those 'Merlot is the whore of the vineyard' talks, is it?",
    "You ballet flat wearing piece of Oregon trash.",
    "I would just ruin my life for that boy.",
    "Never thought I'd fall for the slim hip ghost of Tom Cruise",
    "Hey Gefilteface! Quit playing 'Where's My Foreskin' and get in here and rub my feet before I divorce your yenta-loving, Ashkenazi ass",
    "What am I boring you now??",
    "What you are, is the human equivalent of the crack between two couch cushions.",
    "I made a boo boo. Wait nope I made a yum yum.",
    "You and I have never really clicked, huh?"
];

const winstonQuotes = [
    "SHAWTY WHAT THAT THANG DO?!",
    "Ah, please. You're an eight. You're an eight and one-fifth. Everybody knows I'm a sweet, sweet six.",
    "You're having sex. Not inventing it. It can't be that good.",
    "Saturday is a day for sleeping, and damn it, you will not take that away from me!",
    "I may or may not have done an extensive amount of research on wedding dresses.",
    "I will say only one thing about that man that I've only said about Ryan Gosling… hot damn!",
    "The only thing I want in my mouth is Mr. and Mrs. ibuprofen, minus the Mister.",
    "Nobody's getting pregnant tonight! That's the same thing I say on my dates.",
    "I know you're lying, and I'm hurt, but I'm gonna eat this, anyway.",
    "I had dibs on her since the first grade dude."
];

const coachQuotes = [
    "I'm gonna bake a cake so moist, girls are gonna be like, 'Ewww, why did you say moist? I hate that word?' and I'm gonna be like, 'Taste the cake!' And they're gonna be like, 'Damn, it's moist!",
    "My boss says I can't talk to women.",
    "I need a little boy! No not like that...i need you to hang with my friends...ah no....to pretend to be in a relationship with a grown man....i did not think this through.",
    "I guess I'll go back to having meaningless sex with beautiful women.",
    "The boy looks like he was raised in a muffin.",
    "Oh, look at the time! It's butt-o-clock!",
    "Who's talking to you, Depression-era garbage man?",
    "I wanna choke you until your eyes literally pop out of your head.",
    "Can't spell sex without the 'ex.'",
    "Relationships are prisons."
];


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


