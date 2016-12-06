import {getPointsBetween} from './BunnyHQ'

it('should return all points between given places', () => {
    expect(getPointsBetween([0,3], [0,5])).toEqual([[0,3], [0,4], [0,5]])
})