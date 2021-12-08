//Acrescentar a idade para cada passageiro

const { passengers } = require('../data');

passengers.forEach(passenger => {
    const currentYear = new Date().getFullYear()
    passenger.age = currentYear - passenger.birthYear;
})

console.log(passengers)
console.table(passengers)

