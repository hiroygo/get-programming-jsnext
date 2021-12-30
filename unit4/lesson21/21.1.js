import defaultExport, * as sub from "./21.1.sub.js";
console.log(defaultExport); // bar
console.log(sub.say()); // hello

// sub はオブジェクト
console.log(typeof sub); // object
console.log(sub); // [Module: null prototype] { default: 'bar', say: [Function: say] }
