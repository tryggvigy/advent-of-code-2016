import { getNumOfInvalidTriangles, getTriangles } from './findBrokenTriangles'

describe('getNumOfInvalidTriangles', () => {
  it('should find the number of broken triangles', () => {
    expect(getNumOfInvalidTriangles([[1,2,2],[1,1,3]])).toBe(1)
    expect(getNumOfInvalidTriangles([[1,2,4],[1,3,5]])).toBe(2)
    expect(getNumOfInvalidTriangles([[2,2,4],[1,2,3]])).toBe(2)
    expect(getNumOfInvalidTriangles([[1,4,4],[8,9,16]])).toBe(0)
    expect(getNumOfInvalidTriangles(getTriangles())).toBe(0)
  })
})