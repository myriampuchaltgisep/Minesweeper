const {
    HIDDEN_BOARD,
  } = require('./test/fixtures/boardScenarios');

class Board {
    constructor() {
        this.cells = [...HIDDEN_BOARD];
        this.bombCells = [' ', ' ', ' ', ' ', 'X', ' ', ' ', ' ', ' '];
    }

    printBoard() {
        const board = `+-+-+-+\n|${this.cells[0]}|${this.cells[1]}|${this.cells[2]}|\n+-+-+-+\n|${this.cells[3]}|${this.cells[4]}|${this.cells[5]}|\n+-+-+-+\n|${this.cells[6]}|${this.cells[7]}|${this.cells[8]}|\n`;
        return board;
      }


}

module.exports = Board;
