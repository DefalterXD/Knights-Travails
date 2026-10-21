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

    const [startA, startB] = arrStart;
    const [endA, endB] = arrEnd;

    // Mark the the vertecies starting from bottom-left     
