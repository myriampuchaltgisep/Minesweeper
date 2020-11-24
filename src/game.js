const {
    GAME_STARTS,
    GAME_OVER,
  } = require('./test/fixtures/boardScenarios');
class Game {
    constructor(board) {
        this.board = board;
        this.gameOver = false;
    }

    startGame() {
        console.log(`${this.board.printBoard()}${GAME_STARTS}`);
    }

    gameIsOver(){
        console.log(`${this.board.printBoard()}${GAME_OVER}`);
    }

    isGameOver() {
        if (this.board.cells.find(cell => cell === 'X')) {
            this.gameOver = true;
            this.gameIsOver();
        }
    }

    uncoverField(position) {
        console.log(this.board.bombCells[position]);
        this.board.cells[position] = this.board.bombCells[position];
        this.isGameOver();
    }
}


module.exports = Game;
