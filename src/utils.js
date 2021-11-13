export const DIRECTION_NAMES = Object.freeze({
  NORTH: "NORTH",
  EAST: "EAST",
  SOUTH: "SOUTH",
  WEST: "WEST",
});

const OPPOSITE_DIRECTIONS = [
  [DIRECTION_NAMES.NORTH, DIRECTION_NAMES.SOUTH],
  [DIRECTION_NAMES.EAST, DIRECTION_NAMES.WEST],
];

export const DIRECTION_VECTORS = Object.freeze({
  [DIRECTION_NAMES.NORTH]: { x: 0, y: -1 },
  [DIRECTION_NAMES.SOUTH]: { x: 0, y: 1 },
  [DIRECTION_NAMES.EAST]: { x: 1, y: 0 },
  [DIRECTION_NAMES.WEST]: { x: -1, y: 0 },
});

export function add(coordinateA, coordinateB) {
  return { x: coordinateA.x + coordinateB.x, y: coordinateA.y + coordinateB.y };
}

export function isEqual(coordinateA, coordinateB) {
  return coordinateA.x === coordinateB.x && coordinateA.y === coordinateB.y;
}

export function isInsideBoard(boardDimensions, coordinate) {
  return (
    coordinate.x >= 0 &&
    coordinate.x < boardDimensions.x &&
    coordinate.y >= 0 &&
    coordinate.y < boardDimensions.y
  );
}

export function getNextSnake(snake, direction, shouldGrow = false) {
  const headCoordinate = snake[0];
  const nextHead = add(headCoordinate, direction);
  const withAddedHead = [nextHead, ...snake];

  return shouldGrow
    ? withAddedHead
    : withAddedHead.slice(0, withAddedHead.length - 1);
}

export function getNewApplePosition(boardDimensions, snake) {
  const boardSpaces = [...Array(boardDimensions.x).keys()].flatMap((x) =>
    [...Array(boardDimensions.y).keys()].map((y) => ({ x, y }))
  );
  const openSpaces = boardSpaces.filter(
    (boardSpace) => !snake.some((snakeSpace) => isEqual(snakeSpace, boardSpace))
  );

  return openSpaces[Math.floor(Math.random() * openSpaces.length)];
}

export function isSnakeEatingItself(snake) {
  const headPosition = snake[0];
  return snake.slice(1).some((snakeSpace) => isEqual(snakeSpace, headPosition));
}

export function isStraightOr180Turn(currentDirection, nextDirection) {
  return OPPOSITE_DIRECTIONS.some(
    (directionAndOpposite) =>
      directionAndOpposite.includes(currentDirection) &&
      directionAndOpposite.includes(nextDirection)
  );
}

export function getNewDirectionFromEventKey(key) {
  // Also contains a secret Dvorak mode
  switch (key) {
    case "ArrowUp":
    case "w":
    case ",":
      return DIRECTION_NAMES.NORTH;
    case "ArrowDown":
    case "s":
    case "o":
      return DIRECTION_NAMES.SOUTH;
    case "ArrowLeft":
    case "a":
      return DIRECTION_NAMES.WEST;
    case "ArrowRight":
    case "d":
    case "e":
      return DIRECTION_NAMES.EAST;
    default:
      return null;
  }
}

export function getNextHeadDirectionAndQueue(queue, currentDirection) {
  const foundIndex = queue.findIndex(
    (direction) => !isStraightOr180Turn(currentDirection, direction)
  );

  const noNextDirectionFound = foundIndex === -1;
  if (noNextDirectionFound) {
    return [[], currentDirection];
  } else {
    return [queue.slice(foundIndex + 1), queue[foundIndex]];
  }
}
