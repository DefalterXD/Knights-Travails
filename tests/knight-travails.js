export const knightMoves = function knightMovesFromStartToEnd(arrStart, arrEnd) {
    const board = [[0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0]];

    const [startA, startB] = arrStart;
    const [endA, endB] = arrEnd;
    const boardLength = board.length - 1;

    // Mark the the vertecies starting from bottom-left     
    board[boardLength - startA][startB] = 1;
    board[boardLength - endA][endB] = 1;
};