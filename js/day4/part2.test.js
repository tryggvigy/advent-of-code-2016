import {
  parse, shift, decypher, findNPObjectStore, getRooms
} from './part2'

describe('parse', () => {
  it('should parse the room string', () => {
    expect(parse('qzmt-zixmtkozy-ivhz-343[abcde]')).toEqual({
      cypher: 'qzmt-zixmtkozy-ivhz',
      sector: 343
    })
  })
})

describe('shift', () => {
  it('should shift the lower case letter by given amount', () => {
    expect(shift('a', 0)).toBe('a')
    expect(shift('a', 1)).toBe('b')
  })
  it('should shift z to a if amount given is 1', () => {
    expect(shift('z', 1)).toBe('a')
  })
  it('should be able to shift multiple circles around the alphabet', () => {
    expect(shift('a', 26)).toBe('a')
    expect(shift('a', 26*2)).toBe('a')
    expect(shift('a', (26*2)+1)).toBe('b')
  })
  it('should change a dash into a space no matter the shift', () => {
    expect(shift('-', 9999)).toBe(' ')
    expect(shift('-', 0)).toBe(' ')
  })
})

describe('decypher', () => {
  it('should decypher the given room', () => {
    expect(decypher('aaa-bbb-ccc', 1)).toEqual('bbb ccc ddd')
    expect(decypher('qzmt-zixmtkozy-ivhz', 1)).toEqual('ranu ajynulpaz jwia')
  })
})

describe('findNPObjectStore', () => {
  it('should return the sector id of the north pole object storage', () => {
    expect(findNPObjectStore(['northpole-object-storage-0[abcde]'])).toEqual(0)
    expect(findNPObjectStore(getRooms())).toEqual(991) // answer
  })
})
