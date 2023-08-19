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
let button = document.querySelectorAll(".button")
const input = document.querySelector("input");

let player = {
    name: "",
    chips: 500,
}

// allow interactive name adding

input.addEventListener("input", updateValue);

function updateValue(e) {
  player.name = e.target.value;

  playerEl.textContent = player.name + ": $" + player.chips;
}

// starting the game

function startGame(){
    messageEl.classList.remove("lose");
    messageEl.classList.remove("win");

    isStillInGame = true;
    let firstCard = randomCard();
    let secondCard = randomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard]
    renderGame();
    updateChipValue();
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
        messageEl.classList.add("win");
    } else {
        message = "You're out of the game"
        isStillInGame = false;
        messageEl.classList.add("lose");
    }
    messageEl.textContent = message
    updateChipValue();
}

// updating chip value
function updateChipValue(){
    if (sum > 21) {
        player.chips -= 50;
    } else if (sum === 21){
        player.chips += 50;
    } else {
        return player.chips;
    }

    playerEl.textContent = player.name + ": $" + player.chips;

    if (player.chips < 0){
        cardsEl.classList.add("hidden");
        sumEl.classList.add("hidden");
        button.classList.add("hidden")
    }
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