import { transposeMatrix, getNumOfInvalidTriangles } from './findBrokenVertical'

describe('transposeMatrix', () => {
  it('should find the number of broken triangles', () => {
    expect(transposeMatrix(
      [[1,5,4],[4,5,6],[7,8,9],[1,2,3],[4,5,6],[7,8,9]]
    )).toEqual(
      [[1,4,7,1,4,7],[5,5,8,2,5,8],[4,6,9,3,6,9]]
    )
  })
})

describe('getNumOfInvalidTriangles', () => {
  it('should', () => {
    expect(getNumOfInvalidTriangles(
      [[1,4,7,1,4,7],[5,5,8,2,5,8],[4,6,9,3,6,9]])
    ).toEqual(2)

    expect(getNumOfInvalidTriangles([
      [ 785, 272, 801, 572, 644, 191, 860, 233, 720 ],
      [ 516, 511, 791, 150, 534, 396, 92, 321, 333 ],
      [ 744, 358, 693, 74, 138, 196, 399, 823, 570 ]
    ])).toEqual(9)



  })
})