//Ordenar o carrinho por quantidade de produtos (do maior para o menor)
const { shopCart } = require('../data')
const { passengers } = require('../data')

const orderByQtt = shopCart.sort((a, b) => b.quantity - a.quantity)

console.log(orderByQtt)


//Ordenar o carrinho por preço (do menor para o maior)
const orderByPrice = shopCart.sort((a, b) => a.unitPrice - b.unitPrice)

console.log(orderByPrice)


//Organize os passageiros por nome.
const orderByPassengerName = passengers.sort((pa, pb) => {
    if (pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return -1;
    if (pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return 1;
    return 0;
});

console.table(orderByPassengerName);