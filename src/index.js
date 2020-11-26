// Execute the game on the console
const Game = require("./game");
const Board = require('./board');
const minefield = [['2', '2', '1'], ['*', '*', '2'], ['3', '*', '2']];

const board = new Board(minefield);
const game = new Game(board);

game.startGame();
game.uncoverField(2,0);
game.uncoverField(0,0);
game.uncoverField(1,1);
