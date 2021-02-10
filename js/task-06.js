const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {

    let totalPrice = 0;

    const values = Object.values(allProducts);

    for (const value of values) {

        if (value.name === productName) {
            return totalPrice = value.price * value.quantity;
        }
    }
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

console.log(calculateTotalPrice(products, 'Сканер')); // 8100

console.log(calculateTotalPrice(products, 'Захват')); // 2400