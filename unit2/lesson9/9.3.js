console.log('これは穴 hole と呼ばれる');
// [ <5 empty items> ]
console.log(new Array(5));

const arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
    arr[i] = '';
}
// [ '', '', '', '', '' ]
console.log(arr);

// Array.map では穴は無視される
// [ <5 empty items> ]
console.log(new Array(5).map(i => ''));

// Array.fill ならうまくいく
// [ '', '', '', '', '' ]
console.log(new Array(5).fill(''));
