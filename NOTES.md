# Game Acceptance Criteria

1 – Game Board Creation phase:
+-+-+-+
| | | | 
+-+-+-+
| | | | 
+-+-+-+ 
| | | |
+-+-+-+
[Sandbox 3x3] Game created

- The board is expected to be created
- The board cells are expected to be empty
- The board is expected to be shown on screen with the message 'Game created'

-----------------------------------------------------------------------------

2 – Game Over - Step on a bomb on 1:1
+-+-+-+
| | | | 
+-+-+-+
| |X| | 
+-+-+-+ 
| | | |
+-+-+-+
[Sandbox 3x3] BOOM! – Game Over.

- The game is expected to be over
- The uncovered board is expected to contain a bomb
- The bomb cell is expected to be uncovered
- The board is expected to be shown on screen with the message 'Game over'

-----------------------------------------------------------------------------

3 – Clean square 2:0 and get the number of bombs around
+-+-+-+
| | | | 
+-+-+-+
| | | | 
+-+-+-+ 
|3| | |
+-+-+-+
[Sandbox 3x3] 3 bombs around your square.

- The game is not expected to be over
- The uncovered cell is expected to contain a 3 (number of bombs around the cell)
- The uncovered cell is expected to have 3 bombs around it
- The board is expected to be shown on screen with the amount of bombs around the uncovered cell
