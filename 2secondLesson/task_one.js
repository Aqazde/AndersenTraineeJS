function myFilter(callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function');
    }

    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
}

Array.prototype.myFilter = myFilter;

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.myFilter((num) => num % 2 === 0);
console.log(evenNumbers);

const obj = { multiplier: 2 };
const filteredNumbers = numbers.myFilter(function (num) {
    return num * this.multiplier > 5;
}, obj);
console.log(filteredNumbers);
