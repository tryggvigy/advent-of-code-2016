import {
  parseRoomString, realRoomSectorIdSum,
  getRooms, getLetterFrequency, getFiveMostCommon
} from './rooms'

describe('parseRoomString', () => {
  it('should parse the given room string', () => {
    expect(
      parseRoomString('aaac-bbbe-cc-ddeee-ee-f-131[abcde]')
    ).toEqual({
      hash: 'abcde',
      mostCommonLetters: ['e', 'a', 'b', 'c', 'd'],
      sectorId: 131
    })
     expect(parseRoomString('gbc-frperg-ppppp-nnnnnn-377[rgbnp]')).toEqual({
      hash: 'rgbnp',
      mostCommonLetters: ['n','p','g','r','b'],
      sectorId: 377
     })
  })
})

describe('getLetterFrequency', () => {
  it('should return a map of the letter frequencies of the given letter array', () => {
    expect(getLetterFrequency('')).toEqual({})
    expect(getLetterFrequency('cbbbeccddeeeeefaaa')).toEqual({e:6,a:3,b:3,c:3,d:2,f:1})
  })
})

describe('getFiveMostCommon', () => {
  it('should return a map of the letter frequencies of the given letter array', () => {
    expect(getFiveMostCommon({e:6,a:3,b:3,c:3,d:2,f:1})).toEqual(['e', 'a', 'b', 'c', 'd'])
  })
  it('should break ties by alphabetic orders', () => {
    expect(getFiveMostCommon({t:6,r:3,s:3,a:3,b:3,c:3})).toEqual(['t', 'a', 'b', 'c', 'r'])
  })
})

describe('realRoomSectorIdSum', () => {
  it('should return the sum of the sector ids of the real rooms', () => {
    expect(realRoomSectorIdSum([
      'gbc-frperg-377[rgbce]',
      'mbcjjcha-422[cjabh]',
    ])).toBe(799)

    expect(realRoomSectorIdSum(getRooms())).toBe(409147) // answer
  })
})
