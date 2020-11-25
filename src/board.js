const {
    HIDDEN_BOARD,
  } = require('./test/fixtures/boardScenarios');

class Board {
    constructor(minefield) {
        this.cells = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
        this.minefield = minefield;
    }

    printBoard() {
        const board = `+-+-+-+\n|${this.cells[0][0]}|${this.cells[0][1]}|${this.cells[0][2]}|\n+-+-+-+\n|${this.cells[1][0]}|${this.cells[1][1]}|${this.cells[1][2]}|\n+-+-+-+\n|${this.cells[2][0]}|${this.cells[2][1]}|${this.cells[2][2]}|\n`;
        return board;
    }

    adjacentBombs(row, column) {
        let numberOfAdjacentBombs = 0;
        // Directions are clockwise
        const adjacentCells = {
            up: this.getCell(row-1, column),
            upRight: this.getCell(row-1, column+1),
            right: this.getCell(row, column+1),
            downRight: this.getCell(row+1, column+1),
            down: this.getCell(row+1, column),
            downLeft: this.getCell(row+1, column-1),
            left: this.getCell(row, column-1),
            upLeft: this.getCell(row-1, column-1)
        }
        for (var key in adjacentCells) {
            if (adjacentCells[key] === '*') {
                numberOfAdjacentBombs++;
            }
        }
        return numberOfAdjacentBombs;
    }
    getCell(row, column) {
        if (this.minefield[row] && this.minefield[row][column]) {
            return this.minefield[row][column];
        }
        return null;
    }
}

module.exports = Board;
