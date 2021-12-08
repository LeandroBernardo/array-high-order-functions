//Retorne o nome dos passageiros
const { passengers } = require('../data');

const passengerName = passengers.map(person => person.name)

console.log(passengerName)


//retorne o nome e idade dos passageiros
const passengerList = passengers.map(passenger => {
    const currentYear = new Date().getFullYear()
    const newPassengerList = `O passageiro ${passenger.name} tem ${currentYear - passenger.birthYear} anos}`
    return newPassengerList
})

console.log(passengerList)