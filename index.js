let FOFA = document.getElementById("fofa")
let saveEl = document.getElementById("save-el")
let count = 0
function increment(){
count = count + 1
FOFA.innerText = count 

}

function save(){
   let countStr = count +  " -  "
    saveEl.innerText += countStr
    FOFA.innerText = 0 
    count = 0
}

