export const sumTotal = (cart) => {
    const reducer = (accum, currentValue) => accum + currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
}