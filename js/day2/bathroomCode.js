import fs from 'fs'

const digitCodes = fs.readFileSync(`${__dirname}/bathroom_code.txt`).toString().split('\n').map(row => row.split(''))

const keypad = [
  [1,2,3], 
  [4,5,6], 
  [7,8,9],
]

let currIndex = [1, 1]

const deltaByDir = {
  U: [-1, 0],
  R: [0, 1],
  D: [1, 0],
  L: [0, -1],
}

export const isInBounds = (values) => Math.min(...values) > -1 && Math.max(...values) < 3

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