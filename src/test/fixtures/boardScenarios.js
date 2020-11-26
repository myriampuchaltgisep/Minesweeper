const HIDDEN_BOARD = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];

const GAME_CREATION_WITH_EMPTY_BOARD = 
`+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
Game created!`;

const GAME_OVER_BOARD = 
`+-+-+-+
| | | |
+-+-+-+
| |*| |
+-+-+-+
| | | |
Game over!`;

const CLEAN_CELL_BOARD = 
`+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
|3| | |
3 bombs around your square`;

const GAME_STARTS = 'Game created!';
const GAME_OVER = 'Game over!';

module.exports = {
    HIDDEN_BOARD,
    GAME_CREATION_WITH_EMPTY_BOARD,
    GAME_STARTS,
    GAME_OVER_BOARD,
    GAME_OVER,
    CLEAN_CELL_BOARD
  };
