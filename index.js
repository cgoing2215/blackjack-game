let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let messageEl = document.querySelector("#message-el");
let firstCard = 0
let secondCard = 0
let cards = []

// starting the game

function startGame(){
    renderGame();
}

function renderGame(){
    let firstCard = randomCard();
    let secondCard = randomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard)
    cards.push(secondCard)

    cardsEl.innerText = "Cards: " + cards
    sumEl.innerText = "Sum: " + sum
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

}