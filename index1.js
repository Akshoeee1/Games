 let hands = ["a","b","b","a","a"]


let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit(){

    for (let i = 0; i < hands.length; i++){
        if(hands[i] ==="a"){
            appleShelf.textContent += " a "

        }else {
            orangeShelf.textContent += " b "
        }

    }
}
sortFruit()