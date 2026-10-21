class Queue {
    constructor() {
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(item) {
        this.items[this.tail] = item;
        this.tail++;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.head]
        delete this.items[this.head];
        this.head++;
        return item;
    }

    isEmpty() {
        return this.head === this.tail;
    }
}

export const knightMoves = function knightMovesFromStartToEnd(arrStart, arrEnd) {
    const board = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]];

    const [startA, startB] = arrStart;
    const [endA, endB] = arrEnd;
    // const boardLength = board.length - 1;

    // Mark the the vertecies starting from bottom-left     
    board[startA][startB] = 1;
    board[endA][endB] = 1;

    possibleMoves(board, startA, startB, endA, endB);
};


const possibleMoves = function possibleMovesFromKnight(board, startA, startB) {
    let knightMovesQueue = new Queue();
    const completeMoves = [];
    let currentMoves = [];
    knightMovesQueue.enqueue([startA, startB]);

    // WHILE goes into the queue for BFS x
    while (!knightMovesQueue.isEmpty()) {
        const startIndex = knightMovesQueue.dequeue();
        const [startIdxA, startIdxB] = startIndex;

        // IF the cell is the destination
        if (board[startIdxA][startIdxB] === 1) {
            currentMoves.push([startIdxA, startIdxB]);
            completeMoves.push(currentMoves);
            currentMoves = [];
        }
        // IF on every knight turn, add that into the queue
        if (startIdxA + 2 <= 7 && startIdxB + 1 <= 7) {
            board[startIdxA + 2][startIdxB + 1] = 1;
            currentMoves.push([startIdxA + 2, startIdxB + 1]);
            knightMovesQueue.enqueue([startIdxA + 2, startIdxB + 1]);
        }
        if (startIdxA + 1 <= 7 && startIdxB + 2 <= 7) {
            board[startIdxA + 1][startIdxB + 2] = 1;
            currentMoves.push([startIdxA + 1, startIdxB + 2]);
            knightMovesQueue.enqueue([startIdxA + 1, startIdxB + 2]);
        }
        if (startIdxA - 1 >= 0 && startIdxB + 2 <= 7) {
            board[startIdxA - 1][startIdxB + 2] = 1;
            currentMoves.push([startIdxA - 1, startIdxB + 2]);
            knightMovesQueue.enqueue([startIdxA - 1, startIdxB + 2]);
        }
        if (startIdxA - 2 >= 0 && startIdxB + 1 <= 7) {
            board[startIdxA - 2][startIdxB + 1] = 1;
            currentMoves.push([startIdxA - 2, startIdxB + 1]);
            knightMovesQueue.enqueue([startIdxA - 2, startIdxB + 1]);
        }
        if (startIdxA - 2 >= 0 && startIdxB - 1 >= 0) {
            board[startIdxA - 2][startIdxB - 1] = 1;
            currentMoves.push([startIdxA - 2, startIdxB - 1]);
            knightMovesQueue.enqueue([startIdxA - 2, startIdxB - 1]);
        }
        if (startIdxA - 1 >= 0 && startIdxB - 2 >= 0) {
            board[startIdxA - 1][startIdxB - 2] = 1;
            currentMoves.push([startIdxA - 1, startIdxB - 2]);
            knightMovesQueue.enqueue([startIdxA - 1, startIdxB - 2]);
        }
        if (startIdxA + 2 <= 7 && startIdxB - 1 >= 0) {
            board[startIdxA + 2][startIdxB - 1] = 1;
            currentMoves.push([startIdxA + 2, startIdxB - 1]);
            knightMovesQueue.enqueue([startIdxA + 2, startIdxB - 1]);
        }
        if (startIdxA + 1 <= 7 && startIdxB - 2 >= 0) {
            board[startIdxA + 1][startIdxB - 2] = 1;
            currentMoves.push([startIdxA + 1, startIdxB - 2]);
            knightMovesQueue.enqueue([startIdxA + 1, startIdxB - 2]);
        }
        console.log(startIdxA, startIdxB);
    }
    // ENDWHILE

}