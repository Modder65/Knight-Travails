# Knight's Shortest Path

This JavaScript code implements a function to find the shortest possible path for a knight on an 8x8 chess board, from a given starting position to a target position.

## Features

- **isInside(x, y):** A function to check if the given coordinates exist inside the 8x8 chess board.
- **validatePositions(start, end):** A function to validate the start and end positions.
- **knightMoves(start, end):** The main function to find the knight's shortest path.

## How It Works

1. **Validating Positions:** The code checks if both the start and end positions are valid (within the bounds of the 8x8 chessboard).
2. **Breadth-First Search:** It utilizes the Breadth-First Search algorithm to explore all possible moves a knight can make. The BFS ensures the shortest path is found.
3. **Tracking Visited Positions:** It keeps track of already visited squares using a Set data structure, which ensures positions are not revisited.
4. **Handling Errors:** If no path is found or the positions are invalid, the function returns an error status and an appropriate error message.
5. **Result:** The function returns an object containing the status of the search and the path if successful.

## Usage

```javascript
const result = knightMoves([3, 3], [4, 3]);
if (result.status === "success") {
  console.log(`You made it in ${result.path.length} moves! Here's your path:`);
  for (const p of result.path) console.log(p);
} else {
  console.log(result.message);
}
```
