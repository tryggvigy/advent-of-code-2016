import fs from 'fs'

const digitCodes = fs.readFileSync(`${__dirname}/bathroom_code.txt`).toString().split('\n').map(row => row.split(''))

const keypad = [
  [null, null, 1, null, null], 
  [null, 2, 3, 4, null], 
  [5,6,7,8,9], 
  [null, 'A', 'B', 'C', null], 
  [null, null, 'D', null, null], 
]

let currIndex = [2, 0]

const deltaByDir = {
  U: [-1, 0],
  R: [0, 1],
  D: [1, 0],
  L: [0, -1],
}

export const isInBounds = ([row, col]) => Math.min(row, col) > -1 && Math.max(row, col) < 5 && keypad[row][col]

export const addTuples = ([a1, a2], [b1, b2]) => [a1+b1, a2+b2]

const bathroomCode = digitCodes.reduce((codeStr, row) => {
  const [rIndex, cIndex] = row.reduce((keyPadIndex, direction) => {
    const next = addTuples(keyPadIndex, deltaByDir[direction])
    if (isInBounds(next)) {
      currIndex = next
      return next
    } 
    return keyPadIndex
  }, currIndex)

  return codeStr + keypad[rIndex][cIndex]
}, '')


console.log(bathroomCode)