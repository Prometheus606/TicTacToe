

function click(event) {
    let index = fieldList.indexOf(event.currentTarget)
    if (game.gamePattern[index] !== 0) {
        gameStateText.html("Sag mal, bist du doof?")
    }

    if (game.currentPlayer === "You") {       
        event.currentTarget.classList.add("cross")
        game.gamePattern[index] = 1
        game.currentPlayer = "Computer"
        gameStateText.html(game.currentPlayer)
    } 

    check()
    if (game.gameState !== 0) return

    setTimeout(() => {
        let randomIndex;
        while (true) {
            randomIndex = Math.floor(Math.random() * game.gamePattern.length)
            if (game.gamePattern[randomIndex] === 0) {
                break
            }
        }
        console.log(randomIndex)
        fieldObjects[randomIndex].classList.add("circle")
        game.gamePattern[randomIndex] = 2
        game.currentPlayer = "You"
        gameStateText.html(game.currentPlayer)

        check()
    }, 1000);

    
}

function check() {
    if (game.gamePattern[0] === 1 && game.gamePattern[1] === 1 && game.gamePattern[2] === 1 ||
        game.gamePattern[3] === 1 && game.gamePattern[4] === 1 && game.gamePattern[5] === 1 ||
        game.gamePattern[6] === 1 && game.gamePattern[7] === 1 && game.gamePattern[8] === 1 ||
        game.gamePattern[0] === 1 && game.gamePattern[3] === 1 && game.gamePattern[6] === 1 ||
        game.gamePattern[1] === 1 && game.gamePattern[4] === 1 && game.gamePattern[7] === 1 ||
        game.gamePattern[2] === 1 && game.gamePattern[5] === 1 && game.gamePattern[8] === 1 ||
        game.gamePattern[0] === 1 && game.gamePattern[4] === 1 && game.gamePattern[8] === 1 ||
        game.gamePattern[2] === 1 && game.gamePattern[4] === 1 && game.gamePattern[6] === 1
    ) {   
        game.gameState = 1
    } else if (game.gamePattern[0] === 2 && game.gamePattern[1] === 2 && game.gamePattern[2] === 2 ||
        game.gamePattern[3] === 2 && game.gamePattern[4] === 2 && game.gamePattern[5] === 2 ||
        game.gamePattern[6] === 2 && game.gamePattern[7] === 2 && game.gamePattern[8] === 2 ||
        game.gamePattern[0] === 2 && game.gamePattern[3] === 2 && game.gamePattern[6] === 2 ||
        game.gamePattern[1] === 2 && game.gamePattern[4] === 2 && game.gamePattern[7] === 2 ||
        game.gamePattern[2] === 2 && game.gamePattern[5] === 2 && game.gamePattern[8] === 2 ||
        game.gamePattern[0] === 2 && game.gamePattern[4] === 2 && game.gamePattern[8] === 2 ||
        game.gamePattern[2] === 2 && game.gamePattern[4] === 2 && game.gamePattern[6] === 2
    ) {   
        game.gameState = 2
    } else if (game.gamePattern.length === 9 && game.gamePattern.indexOf(0) === -1) {
        game.gameState = 3
    }

    if (game.gameState === 1) {
        gameStateText.html("You Won! Press any key to play again.")
        reset()
    } else if (game.gameState === 2) {
        gameStateText.html("Computer Wins! Press any key to play again.")
        reset()
    } else if (game.gameState === 3) {
        gameStateText.html("It's a draw! Press any key to play again.")
        reset()
    }
}


function randomPlayer() {
    return "You"
}