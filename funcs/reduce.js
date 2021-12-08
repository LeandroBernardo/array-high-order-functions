//Qual o valor total do carrinho de compras?

const { shopCart } = require('../data')

const shopCartTotalValue = shopCart.reduce((acc, item) => acc + item.unitPrice, 0)

console.log(shopCartTotalValue)


//Qual o valor total do carrinho de compras multiplicado pela quantidade?
const shopCartTotalValueWithUnit = shopCart.reduce((acc, item) => {
    return acc + item.unitPrice * item.quantity
}, 0)

console.log(shopCartTotalValueWithUnit)


//Quantidade total de produtos no carrinho
const shopCartTotalQtt = shopCart.reduce((acc, item) => {
    const total = acc + item.quantity
    return total
}, 0)

console.log(shopCartTotalQtt)