

function click(event) {
    let index = fieldList.indexOf(event.currentTarget)
    if (game.gamePattern[index] !== 0) {
        gameStateText.html("Sag mal, bist du doof?")
    } else if (game.currentPlayer === "Player X") {       
        event.currentTarget.classList.add("cross")
        game.gamePattern[index] = 1
        game.currentPlayer = "Player O"
        gameStateText.html(game.currentPlayer)
    } else {
        event.currentTarget.classList.add("circle")
        game.gamePattern[index] = 2
        game.currentPlayer = "Player X"
        gameStateText.html(game.currentPlayer)
    }

    check()
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
        gameStateText.html("Player X Wins! Press any key to play again.")
        reset()
    } else if (game.gameState === 2) {
        gameStateText.html("Player O Wins! Press any key to play again.")
        reset()
    } else if (game.gameState === 3) {
        gameStateText.html("It's a draw! Press any key to play again.")
        reset()
    }
}



function randomPlayer() {
    let randNumber =  Math.floor(Math.random() * 2)
    if (randNumber == 0) return "Player X"
    else return "Player O"
}


