const {
    GAME_STARTS,
    GAME_OVER,
  } = require('./test/fixtures/boardScenarios');
class Game {
    constructor(board) {
        this.board = board;
    }

    startGame() {
        console.log(`${this.board.printBoard()}${GAME_STARTS}`);
    }

    gameIsOver(){
        console.log(`${this.board.printBoard()}${GAME_OVER}`);
    }
    isGameOver() {
        const cells = [].concat(...this.board.cells);
        if (cells.find(cell => cell === '*')) {
            return true;
        }
        return false;
    }

    uncoverField(row, column) {
        this.board.cells[row][column] = this.board.minefield[row][column];
        this.printGame(row, column);
    }
    printGame(row, column) {
        const uncoveredField = this.board.cells[row][column];
        console.log(`Uncover Field in Row: ${row+1}, Column: ${column+1}`);
        if (this.isGameOver()) {
            this.gameIsOver();
        } else {
            console.log(`${this.board.printBoard()}${uncoveredField} bombs around your square`);
        }
      }
}


module.exports = Game;
