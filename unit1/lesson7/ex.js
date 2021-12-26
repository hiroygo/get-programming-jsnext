function withProps() {
    const stringParts = arguments[0];
    let values = [].slice.call(arguments, 1);
    return stringParts.reduce((l, r) => {
        const p = values.shift();
        if ((typeof p === "object") &&
            ("src" in p) && (typeof p.src === "string") &&
            ("alt" in p) && (typeof p.alt === "string")) {
            return `${l}src="${p.src}" alt="${p.alt}"${r}`; 
        }
        return l + r; 
    });
}

const props = {
    src: "https://www.google.com",
    alt: "foobar"
}
console.log(withProps`<img ${props}>`);
console.log(withProps`1${2}3${4}${5}`);
