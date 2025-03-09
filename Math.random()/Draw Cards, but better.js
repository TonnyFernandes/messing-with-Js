const Cards = new Set([
    // Aces
    'A clubs', 'A diamonds', 'A hearts', 'A spades',
    // 2
    '2 clubs', '2 diamonds', '2 hearts', '2 spades',
    // 3
    '3 clubs', '3 diamonds', '3 hearts', '3 spades',
    // 4
    '4 clubs', '4 diamonds', '4 hearts', '4 spades',
    // 5
    '5 clubs', '5 diamonds', '5 hearts', '5 spades',
    // 6
    '6 clubs', '6 diamonds', '6 hearts', '6 spades',
    // 7
    '7 clubs', '7 diamonds', '7 hearts', '7 spades',
    // 8
    '8 clubs', '8 diamonds', '8 hearts', '8 spades',
    // 9
    '9 clubs', '9 diamonds', '9 hearts', '9 spades',
    // 10
    '10 clubs', '10 diamonds', '10 hearts', '10 spades',
    // Jacks
    'J clubs', 'J diamonds', 'J hearts', 'J spades',
    // Queens
    'Q clubs', 'Q diamonds', 'Q hearts', 'Q spades',
    // Kings
    'K clubs', 'K diamonds', 'K hearts', 'K spades'
]);
let drawDeck = Array.from(Cards);

function drawCard(draw){
    let drawnCards = [];
    for(let i=0; i<draw; i++){
        let x = Math.floor(Math.random() * drawDeck.length);
        drawnCards.push(drawDeck.splice(x, 1));
    }
    return drawnCards
}

let draw = prompt('How many cards do you want to draw? ');
if(draw>52){
    console.log('Rounding number to 52...') 
    draw = 52;
}
console.log(drawCard(draw));
