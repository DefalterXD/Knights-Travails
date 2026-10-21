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

};

