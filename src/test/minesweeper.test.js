const Board = require('../board');
const Game = require('../game');
const executeGame = require('../index');
const mockConsoleLog = jest.spyOn(global.console, 'log');

const {
    HIDDEN_BOARD,
    GAME_CREATION_WITH_EMPTY_BOARD,
    GAME_OVER_BOARD,
    CLEAN_CELL_BOARD
  } = require('./fixtures/boardScenarios')
describe('Game Board Creation', () => {
    let board;
    let game;
  
    const minefield = [['2', '2', '1'], ['*', '*', '2'], ['3', '*', '2']];
  
    beforeEach(() => {
      board = new Board(minefield);
      game = new Game(board);
    });
    test('expect the game board to be created', () => {
      expect(board).toBeInstanceOf(Board);
    });
    test('expect the board cells to be hidden', () => {
        expect(board.cells).toEqual(HIDDEN_BOARD);
    })
    test('expect the game start to be shown on screen', () => {
        game.startGame(board);
        expect(mockConsoleLog).toBeCalledWith(GAME_CREATION_WITH_EMPTY_BOARD);
    });
});

describe('Game Over', () => {
    let board;
    let game;

    const minefield = [['2', '2', '1'], ['*', '*', '2'], ['3', '*', '2']];
  
    beforeEach(() => {
      board = new Board(minefield);
      game = new Game(board);
    });
    test('Expect the game to be over', () => {
        game.uncoverField(1,1);
        expect(game.isGameOver()).toBeTruthy();
    });
    test('Expect the board to contain an uncovered bomb (`*`)', () => {
        game.uncoverField(1,1);
        const cells = [].concat(...board.cells);
        const findBomb = cells.find(cell => cell === '*');
        expect(findBomb).toBeTruthy();
    });
    test('Expect the board to be shown on screen with the message `Game over`', () => {
        game.uncoverField(1,1);
        expect(mockConsoleLog).toBeCalledWith(GAME_OVER_BOARD);
    });
});

describe('Uncover a clean cell and get the number of bombs around', () => {
    let board;
    let game;

    const minefield = [['2', '2', '1'], ['*', '*', '2'], ['3', '*', '2']];
  
    beforeEach(() => {
      board = new Board(minefield);
      game = new Game(board);
    });
    test('Expect the game not to be over', () => {
        game.uncoverField(2,0);
        expect(game.isGameOver()).toBeFalsy();
    });
    test('Expect the uncovered cell to have the right number of bombs (3) around it', () => {
        game.uncoverField(2,0);
        expect(board.adjacentBombs(2,0)).toEqual(3);
    });
    test('Expect the uncovered cell to have the right number of adjacent bombs (3) on it', () => {
        game.uncoverField(2,0);
        expect(board.cells[2][0]).toEqual("3");
    });
    test('Expect the board to be shown on screen with the right amount of bombs around the uncovered cell', () => {
        game.uncoverField(2,0);
        expect(mockConsoleLog).toBeCalledWith(CLEAN_CELL_BOARD);
    });
});

describe('Execute Game', () => {
    executeGame();
});
