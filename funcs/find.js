const { shopCart, passengers } = require('../data')

/**
 * Encontre o preço do sapato
 */

const item = shopCart.find(shopCart => shopCart.product === 'sapato')
console.log(item.unitPrice)


/**
 * Qual passageiro nasceu em 1997?
 */

const passengerBornIn1997 = passengers.find(passengers => passengers.birthYear === 1997)
console.log(passengerBornIn1997.name)

