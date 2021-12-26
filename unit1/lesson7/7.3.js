function noop() {
    const stringParts = arguments[0];
    let values = [].slice.call(arguments, 1);

    console.log(`DUMP: stringParts: ${stringParts}`);
    console.log(`DUMP: values: ${values}`);

    return stringParts.reduce((l, r) => {
        return l + String(values.shift()) + r; 
    });
}

/*
DUMP: stringParts: 1,3,,
DUMP: values: 2,4,5
12345
DUMP: stringParts: 1
DUMP: values: 
1
DUMP: stringParts: ,
DUMP: values: 2
2
*/
console.log(noop`1${2}3${4}${5}`);
console.log(noop`1`);
console.log(noop`${2}`);
