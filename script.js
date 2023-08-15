// Function to check if given coordinates exist inside the 8x8 chess board
function isInside(x, y) {
  return x >= 0 && y >= 0 && x < 8 && y < 8;
}

// Function to validate the start and end positions
function validatePositions(start, end) {
  return isInside(start[0], start[1]) && isInside(end[0], end[1]);
}

// Main function to find the knight's shortest path
function knightMoves(start, end) {
  if (!validatePositions(start, end)) {
    return { status: "error", message: "Invalid start or end position" };
  }

  // Possible moves a knight can make from its current position
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  // Queue for BFS; keeps track of unexplored positions
  const queue = [];

  // Keeps track of already visited squares; Uses a 2D array of booleans
  const visited = new Set();

  // Adds starting position & the currently traveled path to the queue
  queue.push({ pos: start, path: [start] });
  visited.add(start.toString());

  // BFS Algorithm
  while (queue.length > 0) {
    const { pos: currentPos, path } = queue.shift();

    // Check if current position is the target, return the path
    if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
      return { status: "success", path };
    }

    // Explore possible knight moves
    for (const move of moves) {
      const newX = currentPos[0] + move[0];
      const newY = currentPos[1] + move[1];
      const newCoord = [newX, newY];

      // If move is valid, mark as visited and enqueue the new position
      if (isInside(newX, newY) && !visited.has(newCoord.toString())) {
        visited.add(newCoord.toString());
        queue.push({ pos: newCoord, path: [...path, newCoord] });
      }
    }
  }

  return { status: "error", message: "No path found" };
}

// Example usage
const result = knightMoves([3, 3], [4, 3]);
if (result.status === "success") {
  console.log(`You made it in ${result.path.length} moves! Here's your path:`);
  for (const p of result.path) console.log(p);
} else {
  console.log(result.message);
}
