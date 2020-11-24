const {
    EMPTY_BOARD,
    GAME_STARTS
  } = require('./test/fixtures/boardScenarios');

class Board {
    constructor() {
        this.cells = [...EMPTY_BOARD];
    }

    printBoard() {
        const board = `+-+-+-+\n|${this.cells[0]}|${this.cells[1]}|${this.cells[2]}|\n+-+-+-+\n|${this.cells[3]}|${this.cells[4]}|${this.cells[5]}|\n+-+-+-+\n|${this.cells[6]}|${this.cells[7]}|${this.cells[8]}|\n`;
        return board;
      }

    startGame() {
        console.log(`${this.printBoard()}${GAME_STARTS}`);
    }
}

module.exports = Board;
