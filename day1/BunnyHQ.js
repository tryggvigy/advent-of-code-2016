const directions = 'R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5'
  .split(', ')

let currentOrientation = 'N'
let currentPosition = [0,0]
let visitedPoints = {}
let cardinalDirections = {
  N: {L: 'W', R: 'E', orientationFactor: 1},
  E: {L: 'N', R: 'S', orientationFactor: 1},
  S: {L: 'E', R: 'W', orientationFactor: -1},
  W: {L: 'S', R: 'N', orientationFactor: -1},
}

const logIfPointAlreadyVisited = point => 
  visitedPoints[`${point}`] && console.log('found!', point)

export const getPointsBetween = ([aX, aY], [bX, bY]) => {
  let points = []

  if (aX !== bX)
    // Add all delta points on X axis
    for(let i = Math.min(aX, bX); i <= Math.max(aX, bX); i++) points.push([i, aY])

  else if (aY !== bY)
    // Add all delta points on Y axis
    for(let i = Math.min(aY, bY); i <= Math.max(aY, bY); i++) points.push([aX, i])
  
  // Return all the points between pointA and pointB
  return points.slice(1, points.length - 1)
}

// Find the first point already visited.
directions.forEach(([orientation, ...distanceDigits]) => {
  let nextOrientation = cardinalDirections[currentOrientation][orientation]
  let distance = parseInt(distanceDigits.join(''))
  let lastPosition = [...currentPosition]

  if (nextOrientation === 'N' || nextOrientation === 'S') {
    currentPosition[0] += cardinalDirections[nextOrientation].orientationFactor * distance
  } else {
    currentPosition[1] += cardinalDirections[nextOrientation].orientationFactor * distance
  }

  currentOrientation = nextOrientation

  const pointsVisitedByMove = getPointsBetween(lastPosition, currentPosition)

  // Check if any of the points we moved to has already been visited.
  logIfPointAlreadyVisited(lastPosition)
  pointsVisitedByMove.forEach(point => logIfPointAlreadyVisited(point))
  logIfPointAlreadyVisited(currentPosition)

  // Insert all the visited points into the `visitedPoints` object.
  pointsVisitedByMove.forEach(point => {
    visitedPoints[`${point}`] = true
  })
})