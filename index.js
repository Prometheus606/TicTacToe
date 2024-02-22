//const gameMode = "multiPlayer"
const gameMode = "singlePlayer"

// load functions for the game mode
if (gameMode == "multiPlayer") {
    let multiPlayerScript = document.createElement("script")
    multiPlayerScript.src = "js/classes/multiPlayer.js"
    document.body.appendChild(multiPlayerScript)

} else if (gameMode == "singlePlayer"){
    let singlePlayerScript = document.createElement("script")
    singlePlayerScript.src = "js/classes/singlePlayer.js"
    document.body.appendChild(singlePlayerScript)
}

// load Main script
let mainScript = document.createElement("script")
mainScript.src = "js/classes/game.js"
document.body.appendChild(mainScript)


