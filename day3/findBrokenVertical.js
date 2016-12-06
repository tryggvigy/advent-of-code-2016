import fs from 'fs'

export const getTriangles = () =>
  fs.readFileSync(`${__dirname}/triangles.txt`)
    .toString()
    .split('\n')
    .map(row => row
      .split(/\s+/)
      .slice(1) // remove leading whitespace
      .map(x => parseInt(x))
    )

export const transposeMatrix = matrix => {
  let transpose = []
  for(let i = 0; i < matrix[0].length; i++) transpose[i] = []
  for(let i = 0; i < matrix.length; i++)
    for(let j = 0; j < matrix[0].length; j++) 
      transpose[j][i] = matrix[i][j]
  return transpose
}

export const getNumOfInvalidTriangles = trigs => { 
  let count = 0
  for(let i = 0; i < trigs.length; i++) {
    for(let j = 2; j < trigs[0].length; j += 3) {
      let p1 = trigs[i][j-2], p2 = trigs[i][j-1], p3 = trigs[i][j]
      if (p1+p2>p3 && p2+p3>p1 && p1+p3>p2) count++
    }
  }
  return count
}

const triangles = getTriangles()
console.log(getNumOfInvalidTriangles(transposeMatrix(triangles)))
// console.log(transposeMatrix(triangles))