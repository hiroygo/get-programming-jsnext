const foo = {
    bar() {
        console.log(`this: ${this}`);
    }
};
const f1 = foo.bar;
// bind() メソッドは、呼び出された際に
// this キーワードに指定された値が設定される `新しい関数` を生成します
const f2 = foo.bar.bind([1, 2, 3]);
foo.bar();                      // this: [object Object]
f1();                           // this: undefined
f2();                           // this: 1,2,3
// call() は新しい関数を作成するのではなく
// そのまま関数を実行する
f1.call([99, 98, 97]);          // this: 99,98,97


// アロー関数では bind を利用しても this を変更することはできない
const arrowFunc = () => {
    console.log(this);
}
arrowFunc();                    // undefined
arrowFunc.bind([1, 2, 3])();    // undefined


