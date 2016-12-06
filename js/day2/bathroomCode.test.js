import { isInBounds, findBathroomCode, addTuples } from './bathroomCode'

it('should keep stuff inbounds', () => {
  expect(isInBounds([1, 2])).toBe(true)
  expect(isInBounds([0, 3])).toBe(false)
  expect(isInBounds([-1, 2])).toBe(false)
  expect(isInBounds([-1, 2])).toBe(false)
})

describe('addTuples', () => {
  it('should add given tuples', () => {
    expect(addTuples([1,2],[-1,1])).toEqual([0,3])
  })
})


describe('findBathroomCode', () => {
  it('should find the bathroom code for the given instructions', () => {
    expect(findBathroomCode([['L']])).toBe('4')
    expect(findBathroomCode([['L', 'L']])).toBe('4')
    expect(findBathroomCode([['L', 'L'], ['U', 'U']])).toBe('41')
  })
})
