// 何度でも実行できるが結果は同じ
const promise1 = new Promise((resolve) => {
    resolve(Math.random());
});
promise1.then((val) => {
    console.log(val);
});
promise1.then((val) => {
    console.log(val);
});
promise1.then((val) => {
    console.log(val);
});

// # メソッドチェーン
// * The then() method returns a Promise.
// * The catch() method returns a Promise and deals with rejected cases only.
const promise2 = new Promise((resolve, reject) => { reject(); })
    .then(() => { console.log("resolved"); })
    .catch(() => { console.log("rejected"); });

// # then() は実行するたびに新しい Promise オブジェクトを返す
// 1 回だけ hello が出力される
// hello が 3 回出力されることはない
const promise3 = new Promise((resolve, reject) => { resolve(); }).then(() => console.log("hello"));
promise3.then().then().then();

// # then() に渡す関数が返す値は何であっても、次の then() に渡される
Promise.resolve(1)
    .then(n => n + 1) // 1 + 1 = 2
    .then(n => n + 1) // 2 + 1 = 3
    .then(n => console.log(n)); // 3

// # ただし
// then() に渡す関数が Promise オブジェクトを返す場合
// その then() から返される Promise は値が解決または拒否されるまで待機する
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
// 合計 5 秒待機する
wait(1000) // 1 秒待機
    .then(() => {
        return wait(2000)
    }) // 2 秒待
    .then(() => {
        return wait(2000)
    }); // 2 秒待機
