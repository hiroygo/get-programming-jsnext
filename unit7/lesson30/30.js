const promise1 = new Promise((resolve) => {
    resolve(Math.random());
});
// 何度でも実行できるが結果は同じ
promise1.then((val) => {
    console.log(val);
});
promise1.then((val) => {
    console.log(val);
});
promise1.then((val) => {
    console.log(val);
});

// The then() method returns a Promise.
// The catch() method returns a Promise and deals with rejected cases only.
const promise2 = new Promise((resolve, reject) => { reject(); })
    .then(() => { console.log("resolved"); })
    .catch(() => { console.log("rejected"); });

// then() は実行するたびに新しい Promise オブジェクトを返す
// 1 回だけ hello が出力される
// hello が 3 回出力されることはない
const promise3 = new Promise((resolve, reject) => { resolve(); }).then(() => console.log("hello"));
promise3.then().then().then();
