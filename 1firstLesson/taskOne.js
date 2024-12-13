// trying to convert string to number results in NaN
console.log(+'something' + 'ocrystal');

// Nan multiplication results as NaN
console.log(`\nNaN is ${NaN * NaN}
 ba${NaN * 3}`);

// void of something results as undefined
console.log(`\nundefined can be expressed as ${void "something"}
${void 1}`);

// converting to array > reversing it > convert back to string
console.log(`\n${[...'hello'].reverse().join('')}`);
