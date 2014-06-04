function *range(start, end, step) {
    var x,
    step = step || 1;

    for (x = start; x <= end; x += step) {
        yield x;
    }
}

for (let value of range(0, 5)) {
    console.log(value);
}
