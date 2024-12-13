function getPersons(name, age) {
    return [
        { name, age },

        Object.create(Object.prototype, {
            name: { value: name, writable: true, enumerable: true },
            age: { value: age, writable: true, enumerable: true }
        }),

        Object.assign({}, { name, age })
    ];
}

const persons = getPersons('Alice', 30);
console.log(persons);
