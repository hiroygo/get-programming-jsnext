let window = {
    mylib: {}
};
window.mylib.range = function (start, stop, step) {
    let DEFAULT_START = 0;
    let DEFAULT_STEP = 1;

    if (!stop) {
        stop = start;
        start = DEFAULT_START;
    }
    if (stop < start) {
        let tmp = start;
        start = stop;
        stop = tmp;
    }
    if (!step) {
        step = DEFAULT_STEP;
    }

    let arr = [];
    for (let i = start; i < stop; i += step) {
        arr.push(i);
    }
    return arr;
};

// [ 1, 3, 5, 7, 9 ]
console.log(window.mylib.range(1, 10, 2));
