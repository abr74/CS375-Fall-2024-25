function stepBoard(board) {
    const numRows = board.length;
    if (numRows === 0){
        return board; 
    }
    const numColumns = board[0].length;
    if (numColumns === 0){
        return board; 
    }


    const nextBoard = Array.from({ length: numRows }, () => Array(numColumns).fill(false));

    for (let row = 0; row < numRows; row++) {
        for (let column = 0; column < numColumns; column++) {
            const liveNeighbors = countLiveNeighbors(board, row, column, numRows, numColumns);
            const isAlive = board[row][column];

            if (isAlive) {
                // Rule 1: Any live cell with two or three live neighbors remains alive.
                nextBoard[row][column] = (liveNeighbors === 2 || liveNeighbors === 3);
            } else {
                // Rule 2: Any dead cell with exactly three live neighbors becomes a live cell.
                nextBoard[row][column] = (liveNeighbors === 3);
            }
        }
    }

    return nextBoard;
}

function countLiveNeighbors(board, row, column, numRows, numColumns) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1],
    ];
    
    let liveCount = 0;

    for (const [dRow, dColumn] of directions) {
        const newRow = row + dRow;
        const newColumn = column + dColumn;


        if (newRow >= 0 && newRow < numRows && newColumn >= 0 && newColumn < numColumns) {
            if (board[newRow][newColumn]) {
                liveCount++;
            }
        }
    }

    return liveCount;
}
