const arr = ["foo", "bar", "baz"];
const obj = {
    say: "hello",
    number: 100
}

// for...in
for (const key in arr) {
    // 0, 1, 2, 
    process.stdout.write(`${key}, `);
}
console.log()
for (const key in obj) {
    // say, number, 
    process.stdout.write(`${key}, `);
}
console.log()

// for...of
for (const val of arr) {
    // foo, bar, baz, 
    process.stdout.write(`${val}, `);
}
console.log()
// これはエラーになる
// TypeError: obj is not iterable
// for (const val of obj) {}
