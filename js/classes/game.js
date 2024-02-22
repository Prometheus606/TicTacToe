const fieldObjects = $(".field");
const fieldList = fieldObjects.toArray();
const gameStateText = $("#gameState")
let clickEventIsOn = true

const game = {
    currentPlayer: randomPlayer(),         //1: Player cross, 2: Player circle
    gamePattern: [0,0,0,0,0,0,0,0,0],
    gameState: 0,       //0: Game is running, 1: Player 1(cross) wins, 2: Player 2(circle) wins, 3: draw
}
gameStateText.html(game.currentPlayer)

const clickHandler = (event) => click(event)
fieldObjects.on("click", clickHandler)

function reset() {

    fieldObjects.off("click", clickHandler)
    clickEventIsOn = false

    document.addEventListener("keypress", () => {
        game.currentPlayer = randomPlayer();
        game.gamePattern = [0,0,0,0,0,0,0,0,0];
        game.gameState = 0;
        fieldObjects.removeClass("circle cross");
        gameStateText.html(game.currentPlayer);
        document.removeEventListener("keypress", this);
        if (!clickEventIsOn) {
            fieldObjects.on("click", clickHandler);
            clickEventIsOn = true
        }
        
    });   
    
}