import fs from 'fs'

export const getRooms = () => fs
  .readFileSync(`${__dirname}/rooms.txt`)
  .toString()
  .split('\n')

  export const getLetterFrequency = letters => {
    let freq = {}
    letters.split('').forEach(letter => {
      if (freq[letter]) freq[letter]++
      else freq[letter] = 1
    })
    return freq
  }

  export const getFiveMostCommon = freqMap => Object
    .keys(freqMap)
    .sort((a, b) => {
      if(freqMap[a] === freqMap[b]) return a < b ? -1 : 1
      else return freqMap[a] > freqMap[b] ? -1 : 1
    })
    .slice(0,5)

export const parseRoomString = str => {
  let [first, last] = str.split('[')
  let hash = last.slice(0, last.length - 1)
  let tildeGroups = first.split('-')
  let sectorId = parseInt(tildeGroups.pop())
  return {
    mostCommonLetters: getFiveMostCommon(
      getLetterFrequency(tildeGroups.join(''))
    ),
    sectorId,
    hash
  }
}

const isRoomReal = ({hash, mostCommonLetters}) =>
  mostCommonLetters.every(letter => hash.includes(letter))

export const realRoomSectorIdSum = rooms => rooms
  .map(room => parseRoomString(room))
  .reduce((sum, room) =>
    isRoomReal(room) ? sum + room.sectorId : sum,
    0
  )
