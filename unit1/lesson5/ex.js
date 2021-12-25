const window = {
    mylib: {}
};
window.mylib.range = function (start, stop, step) {
    const DEFAULT_START = 0;
    const DEFAULT_STEP = 1;

    if (!stop) {
        stop = start;
        start = DEFAULT_START;
    }
    if (stop < start) {
        const tmp = start;
        start = stop;
        stop = tmp;
    }
    if (!step) {
        step = DEFAULT_STEP;
    }

    const arr = [];
    for (let i = start; i < stop; i += step) {
        arr.push(i);
    }
    return arr;
};

// [ 1, 3, 5, 7, 9 ]
console.log(window.mylib.range(1, 10, 2));
