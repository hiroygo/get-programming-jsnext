// var の再宣言はエラーにならない
var a = 100;
var a;
console.log(a); // 100

// var と let の巻き上げの違い
(function () {
    // var ではエラーにならない
    console.log(b); // undefined
    var b = "b"; 
}());
(function () {
    let x = 1;
    {
        // let では ReferenceError になる
        // ここで参照している x は `let x = 100`
        // 巻き上げが発生して、変数宣言前にアクセスしたのでエラーになった
        console.log(x);
        let x = 100;
    }
}());
