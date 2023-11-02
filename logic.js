function compareThrows(throw1, throw2){
    switch(throw1){
        case "Rock":
            switch(throw2){
                case "Rock":
                    return 0;
                case "Paper":
                    return -1;
                case "Scissors":
                    return 1;
            }
            break;
        case "Paper":
            switch(throw2){
                case "Rock":
                    return 1;
                case "Paper":
                    return 0;
                case "Scissors":
                    return -1;
            }
            break;
        case "Scissors":
            switch(throw2){
                case "Rock":
                    return -1;
                case "Paper":
                    return 1;
                case "Scissors":
                    return 0;
            }
            break;
    }
}

function play(playerSelection){
    console.log(playerSelection)
    computerSelection = ["Rock","Paper","Scissors"][Math.floor(Math.random()*3)]

    console.log(playerThrowTxt.attributes)

    playerThrowTxt.setAttribute("value", playerSelection)
    playerThrowImg.setAttribute("src", `./images/${playerSelection}.png`)
    playerThrowImg.setAttribute("alt", `${playerSelection} hand sign`)
    computerThrowTxt.setAttribute("value", computerSelection)
    computerThrowImg.setAttribute("src", `./images/${computerSelection}.png`)
    computerThrowImg.setAttribute("alt", `${computerSelection} hand sign`)

    switch(compareThrows(playerSelection, computerSelection)){
        case -1: //loss
            resultText.setAttribute("value", "Loss");
            scores[2]++
            break;
        case 0: //tie
            resultText.setAttribute("value", "Tie");
            scores[1]++
            break;
        case 1: //win
            resultText.setAttribute("value", "Win");
            scores[0]++
            break;
    }

    scoreTally.setAttribute("value", `${scores[0]} - ${scores[1]} - ${scores[2]}`)
}
console.log("Test2")

const scores = [0, 0, 0]

const rockButton = document.querySelector("#rockButton")
const paperButton = document.querySelector("#paperButton")
const scissorsButton = document.querySelector("#scissorsButton")

const resultText = document.querySelector("#resultText")
const scoreTally = document.querySelector("#scoreTally")
const playerThrowTxt = document.querySelector("#playerThrowText")
const playerThrowImg = document.querySelector("#playerThrowImage")
const computerThrowTxt = document.querySelector("#computerThrowText")
const computerThrowImg = document.querySelector("#computerThrowImage")

rockButton.addEventListener("click", () => {
    play("Rock")
})
paperButton.addEventListener("click", () => {
    play("Paper")
})
scissorsButton.addEventListener("click", () => {
    play("Scissors")
})

