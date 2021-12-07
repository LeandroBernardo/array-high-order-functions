const { passengers, mailList } = require('../data');

/**
 * Encontre quais passageiros nasceram antes do ano 2000
 */

const passengersBornUntil2000 = passengers.filter(passenger => passenger.birthYear < 2000);
console.log(passengersBornUntil2000)


/**
 * Encontre emails que contenham o @rocketseat.com
 */
const mailListRocket = mailList.filter(mail => mail.includes('@rocketseat.com'))
console.log(mailListRocket)


/**
 * Encontre emails que contenham o @rocketseat.com
 */

const passengersNameStartWithA = passengers.filter(passenger => passenger.name.startsWith('A'))
console.log(passengersNameStartWithA)


