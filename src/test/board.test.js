const Board = require('../board');
const mockConsoleLog = jest.spyOn(global.console, 'log');

const {
    EMPTY_BOARD,
    GAME_CREATION_WITH_EMPTY_BOARD
  } = require('./fixtures/boardScenarios')
describe('Game Board Creation', () => {
    let board;
  
    beforeEach(() => {
      board = new Board();
    });
    test('expect the game board to be created', () => {
      expect(board).toBeInstanceOf(Board);
    });
    test('expect the board cells to be empty', () => {
        expect(board.cells).toEqual(EMPTY_BOARD);
    })

    test('expect the game start to be shown on screen', () => {
        board.startGame();
        expect(mockConsoleLog).toBeCalledWith(GAME_CREATION_WITH_EMPTY_BOARD);
    });
});
