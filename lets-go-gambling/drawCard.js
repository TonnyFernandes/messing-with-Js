function cardSuit(){
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    return suits[Math.floor(Math.random()*suits.length)];
}
function cardNumber(){
    const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function drawCard(){
    let number=cardNumber(), suit=cardSuit();
    return `${number} of ${suit}`;
}

let card=drawCard();
console.log(card);
