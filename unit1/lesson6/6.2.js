function gen50LenString(str) {
    const len = 50;
    const n = len/str.length;
    const mod = len%str.length;
    return str.repeat(n) + str.substring(0, mod);
}

console.log(gen50LenString("f").length);
console.log(gen50LenString("fo").length);
console.log(gen50LenString("foo").length);
