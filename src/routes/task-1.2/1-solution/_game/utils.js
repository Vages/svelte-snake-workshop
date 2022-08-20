/**
 * An enumeration used to describe the different directions on the board.
 * The directions are as on a most maps, with north pointing up and east to the right.
 */
export const DIRECTION = Object.freeze({
  NORTH: "NORTH",
  EAST: "EAST",
  SOUTH: "SOUTH",
  WEST: "WEST",
});

/** An array containing tuples of opposite directions */
const OPPOSITE_DIRECTIONS = [
  [DIRECTION.NORTH, DIRECTION.SOUTH],
  [DIRECTION.EAST, DIRECTION.WEST],
];

/** Map of each DIRECTION to a movement vector */
export const DIRECTION_TO_VECTOR = Object.freeze({
  [DIRECTION.NORTH]: { x: 0, y: -1 },
  [DIRECTION.SOUTH]: { x: 0, y: 1 },
  [DIRECTION.EAST]: { x: 1, y: 0 },
  [DIRECTION.WEST]: { x: -1, y: 0 },
});

/** Add two coordinates' x and y values */
export function add(coordinateA, coordinateB) {
  return { x: coordinateA.x + coordinateB.x, y: coordinateA.y + coordinateB.y };
}

/** Tell whether the two coordinates are the same */
export function isEqual(coordinateA, coordinateB) {
  return coordinateA.x === coordinateB.x && coordinateA.y === coordinateB.y;
}

/** Tell whether the given coordinate is inside the board */
export function isInsideBoard(boardDimensions, coordinate) {
  return (
    coordinate.x >= 0 &&
    coordinate.x < boardDimensions.x &&
    coordinate.y >= 0 &&
    coordinate.y < boardDimensions.y
  );
}

/** Move the snake one space in the given direction */
export function getNextSnake(snake, direction, shouldGrow = false) {
  const headCoordinate = snake[0];
  const nextHead = add(headCoordinate, direction);
  const withAddedHead = [nextHead, ...snake];

  return shouldGrow
    ? withAddedHead
    : withAddedHead.slice(0, withAddedHead.length - 1);
}

/** Pick a random space from the available spaces */
export function pickRandomOpenSpace(boardDimensions, occupiedSpaces = []) {
  const allBoardSpaces = [...Array(boardDimensions.x).keys()].flatMap((x) =>
    [...Array(boardDimensions.y).keys()].map((y) => ({ x, y }))
  );
  const openSpaces = allBoardSpaces.filter(
    (boardSpace) =>
      !occupiedSpaces.some((occupiedSpace) =>
        isEqual(occupiedSpace, boardSpace)
      )
  );

  return openSpaces[Math.floor(Math.random() * openSpaces.length)];
}

/** Tell whether a snake's head is inside some other part of its body */
export function isSnakeEatingItself(snake) {
  const headPosition = snake[0];
  return snake.slice(1).some((snakeSpace) => isEqual(snakeSpace, headPosition));
}

/** Tell whether two directions are perpendicular (i.e. meet at a 90 degree angle) */
export function arePerpendicular(directionA, directionB) {
  const directionsAreSameOrOpposite = OPPOSITE_DIRECTIONS.some(
    (pairOfOpposites) =>
      pairOfOpposites.includes(directionA) &&
      pairOfOpposites.includes(directionB)
  );
  return !directionsAreSameOrOpposite;
}

/**
 * Turn key name into a direction
 *
 * Handles the following input types:
 * <ul>
 *   <li>Arrow keys</li>
 *   <li>WASD</li>
 *   <li>,AOE (Dvorak)</li>
 * </ul>
 */
export function convertKeyboardKeyToDirection(key) {
  switch (key) {
    case "ArrowUp":
    case "w":
    case ",":
      return DIRECTION.NORTH;
    case "ArrowDown":
    case "s":
    case "o":
      return DIRECTION.SOUTH;
    case "ArrowLeft":
    case "a":
      return DIRECTION.WEST;
    case "ArrowRight":
    case "d":
    case "e":
      return DIRECTION.EAST;
    default:
      return null;
  }
}

/**
 * Shift a queue left until a perpendicular direction is found.
 * In other words, delete all "U-turn" and "continue-forward" key presses from the front of the queue.
 */
export function shiftNonPerpendicularMovesOffQueue(queue, currentDirection) {
  const nextPerpendicularIndex = queue.findIndex((direction) =>
    arePerpendicular(currentDirection, direction)
  );

  const noPerpendicularMoves = nextPerpendicularIndex === -1;
  if (noPerpendicularMoves) {
    return [];
  } else {
    return queue.slice(nextPerpendicularIndex);
  }
}
