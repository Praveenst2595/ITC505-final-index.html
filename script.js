document.addEventListener("DOMContentLoaded", function() {
    const boardSize = 5;
    const board = [];
    const gameBoard = document.getElementById('game-board');

    // Initialize the game board
    function initBoard() {
        gameBoard.innerHTML = '';
        for (let i = 0; i < boardSize; i++) {
            board[i] = [];
            for (let j = 0; j < boardSize; j++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('click', () => toggleLights(i, j));
                gameBoard.appendChild(square);
                board[i][j] = square;
            }
        }
        randomizeBoard();
    }

    // Toggle the lights at the given position and adjacent positions
    function toggleLights(i, j) {
        toggleSquare(i, j);
        toggleSquare(i - 1, j);
        toggleSquare(i + 1, j);
        toggleSquare(i, j - 1);
        toggleSquare(i, j + 1);
        checkWin();
    }

    // Toggle the light at a specific position
    function toggleSquare(i, j) {
        if (i >= 0 && i < boardSize && j >= 0 && j < boardSize) {
            board[i][j].classList.toggle('is-off');
        }
    }

    // Randomize the board to ensure it is solvable
    function randomizeBoard() {
        // Create a random solvable board by toggling lights in a specific pattern
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                // Randomly decide whether to toggle this light
                if (Math.random() < 0.5) {
                    toggleLights(i, j);
                }
            }
        }
    }

    // Check if the game is won
    function checkWin() {
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (board[i][j].classList.contains('is-off')) {
                    return;
                }
            }
        }
        alert('You win!');
    }

    initBoard();
});
