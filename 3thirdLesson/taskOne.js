const myIterable = {
    [Symbol.iterator]: function() {
        if (typeof this.from !== 'number' || typeof this.to !== 'number') {
            throw new Error("'from' and 'to' must be specified/must be numbers.");
        }


        let current = this.from;
        const that = this;
        return {
            next() {
                if (current <= that.to) {
                    return { value: current++, done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};


// Examples:
const myIterable1 = Object.create(myIterable);
myIterable1.from = 1;
myIterable1.to = 4;

const invalidCase = Object.create(myIterable);
invalidCase.from = 'aaa';  // Invalid 'from' (string)
invalidCase.to = 4;



// Valid case
try {
    for (let item of myIterable1) {
        console.log(item); // 1, 2, 3, 4
    }
} catch (error) {
    console.error(error);
}

// Invalid case: 'from' is not a number
try {
    for (let item of invalidCase) {
        console.log(item);
    }
} catch (error) {
    console.error(error);
}


