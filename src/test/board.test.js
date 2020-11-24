const Board = require('../board');
const Game = require('../game');
const mockConsoleLog = jest.spyOn(global.console, 'log');

const {
    HIDDEN_BOARD,
    GAME_CREATION_WITH_EMPTY_BOARD,
    GAME_OVER_BOARD
  } = require('./fixtures/boardScenarios')
describe('Game Board Creation', () => {
    let board;
    let game;
  
    beforeEach(() => {
      board = new Board();
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
  
    beforeEach(() => {
      board = new Board();
      game = new Game(board);
    });
    test('Expect the game to be over', () => {
        game.uncoverField(4);
        expect(game.gameOver).toBeTruthy();
    });
    test('Expect the board to contain an uncovered bomb (`X`)', () => {
        game.uncoverField(4);
        expect(board.cells.find(cell => cell === 'X')).toBeTruthy();
    });
    test('Expect the board to be shown on screen with the message `Game over`', () => {
        game.uncoverField(4);
        expect(mockConsoleLog).toBeCalledWith(GAME_OVER_BOARD);
    });
});
