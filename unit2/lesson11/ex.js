const products = [
    {
        name: "product0",
        price: 50,
        images: ["img0.jpg"]
    },
    {
        name: "product1",
        price: 100,
        images: ["img1.jpg"]
    },
];

const [
    {
        name: firstProductName,
        price: firstProductPrice,
        images: [firstProductFirstImage]
    },
    {
        name: secondProductName,
        price: secondProductPrice,
        images: [secondProductFirstImage]
    }
] = products;

console.log(firstProductName, firstProductPrice, firstProductFirstImage);
console.log(secondProductName, secondProductPrice, secondProductFirstImage);
