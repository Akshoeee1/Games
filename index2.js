let  player = {
    name: "akshoee",
    chips: "190$"
}

let cards = []
let sum = 0
let hasblackjack = false
let isAlive = false

let playAround = document.getElementById("playround")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let newCARDS = document.getElementById("newcards")

let playerEl = document.getElementById("player-el")



console.log(cards)
let message = ""

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if(randomNumber === 1){
        return 11
    } else if(randomNumber === 11 || randomNumber === 12 || randomNumber === 13 ){
        return 10
    }else {

 return randomNumber
    }
}


function startGame(){
isAlive = true
let firstcard = getRandomCard()
let secondcard = getRandomCard()
sum = firstcard + secondcard
cards = [firstcard,secondcard]
playerEl.textContent = player.name + ": " + player.chips

renderGame()

}
function  renderGame() {

    sumEl.innerText = "Sum: " + sum
    cardsEl.innerText = "Cards: "
    
    for (let i = 0; i< cards.length; i++){
    cardsEl.textContent += cards[i] + " "
    }



if (sum < 21) {
   
    message = "Do you want another card?"
}

else if (sum === 21){
   
    message = "You've got BLACKJACK!!!!"
    hasblackjack = true
}

 else {
    
    message = " Youre fucked boi!!"
    isAlive = false
}
    playAround.textContent = message
    
}
function newCard(){

    if(isAlive === true && hasblackjack === false){
    newCARDS.textContent = "drawing out another card for your bitchass"
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame() 
    }

}
