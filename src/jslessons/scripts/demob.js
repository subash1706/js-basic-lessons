/* eslint-disable prefer-const */
const maxvalue = Math.max(10, 12, 35, 60, 2, 55)
console.log(maxvalue)

const floatvalue = parseFloat('2.032565')
console.log(floatvalue)

let intvalue = parseInt('2356adcd')
console.log(intvalue)

intvalue = parseInt('abcd 2356')
console.log(intvalue)

let today = Date.now()
console.log(today)
// output : 1647490041373
// returns no of milliseconds since january 1,1970
// 00:00:00 UTC
