import fs from 'fs'

export const getTriangles = () =>
  fs.readFileSync(`${__dirname}/triangles.txt`)
    .toString()
    .split('\n')
    .map(row => row
      .split(/\s+/)
      .slice(1) // remove leading whitespace
      .map(x => parseInt(x))
      .sort((a, b) => a === b ? 0 : a < b ? -1 : 1) // sort row from lowest to highest
    )

export const getNumOfInvalidTriangles = triangles => triangles.reduce(
  (count, [p1, p2, p3]) => (p1 + p2) > p3 ? count + 1 : count, 
  0
)


console.log(getNumOfInvalidTriangles(getTriangles()))