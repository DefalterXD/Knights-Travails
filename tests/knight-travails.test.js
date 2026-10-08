import { knightMoves } from "./knight-travails.js" 

test('Test the shortest path from [0,0] to [1,2]', () => {
    
    expect(knightMoves([0,0], [1,2])).toEqual([0,0], [1,2]);
});