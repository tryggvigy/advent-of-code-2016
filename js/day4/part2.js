import fs from 'fs'

export const getRooms = () => fs
  .readFileSync(`${__dirname}/rooms.txt`)
  .toString()
  .split('\n')

export const parse = room => {
  let cypher = room.split('[')[0].split('-')
  let sector = parseInt(cypher.pop())
  return {cypher: cypher.join('-'), sector}
}

export const shift = (letter, amount) => {
  const firstCharCode = 97 // a
  const lastCharCode = 122 // z
  const dashCharCode = 45, spaceCharCode = 32
  let charcode = letter.charCodeAt()

  if (charcode === dashCharCode) return String.fromCharCode(spaceCharCode)
  if (amount === 0) return letter

  for(let i = 1; i <= amount; i++) {
    charcode++
    if(charcode > lastCharCode) charcode = firstCharCode
  }
  return String.fromCharCode(charcode)
}

export const decypher = (cypher, shiftAmount) => cypher
  .split('')
  .map(letter => shift(letter, shiftAmount))
  .join('')

export const findNPObjectStore = rooms => {
  const code = 'northpole object storage'
  const northPoleRoom = rooms
    .map(parse)
    .find(room => decypher(room.cypher, room.sector) === code)
  if(northPoleRoom)
    return northPoleRoom.sector
  return null
}

// for debugging
const printDecypheredRooms = rooms => rooms
  .map(parse)
  .map(({cypher, sector}) => decypher(cypher, sector))
  .forEach(x => console.log(x))

// printDecypheredRooms(getRooms())
