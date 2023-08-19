let message = ""
let firstCard = 0
let secondCard = 0
let sum = 0
let cards = []
let hasBlackjack = false;
let isStillInGame = false;
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let messageEl = document.querySelector("#message-el");
let playerEl = document.querySelector("#player-el")
let player = {
    name: "Caroline",
    chips: 500,
}

playerEl.textContent = player.name + ": $" + player.chips

// starting the game

function startGame(){
    isStillInGame = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    };

    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got blackjack!"
        hasBlackjack = true;
    } else {
        message = "You're out of the game"
        isStillInGame = false;
    }
    messageEl.textContent = message
}

// drawing cards

function randomCard() {
    let randomValue = Math.floor(Math.random() * 13) + 1
        if (randomValue === 1){
            return 11;
        } else if (randomValue > 10){
            return 10;
        } else {
            return randomValue;
        }
}

function newCard() {
    if (isStillInGame === true && hasBlackjack === false) {
        let newValue = randomCard();
        sum += newValue
    
        cards.push(newValue);
        renderGame();
    }
}