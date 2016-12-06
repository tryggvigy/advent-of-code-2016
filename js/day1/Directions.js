const directions = 'R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5'
  .split(', ')

let currentOrientation = 'N'

let cardinalDirections = {
  N: {L: 'W', R: 'E', traversed: 0},
  E: {L: 'N', R: 'S', traversed: 0},
  S: {L: 'E', R: 'W', traversed: 0},
  W: {L: 'S', R: 'N', traversed: 0},
}

directions.forEach(([orientation, ...distances]) => {
  let nextOrientation = 
    cardinalDirections[currentOrientation][orientation]
  cardinalDirections[nextOrientation].traversed += parseInt(distances.join(''))
  currentOrientation = nextOrientation
})

let xOffset = cardinalDirections.E.traversed - cardinalDirections.W.traversed
let yOffset = cardinalDirections.N.traversed - cardinalDirections.S.traversed

console.log(cardinalDirections)
console.log(xOffset, yOffset)