var gen = function *() {
    console.log("initialized\n");
    var a = yield "a";
    console.log(a);

    return "final value";
};

var running_gen = gen();

setTimeout(function () {
    var value = running_gen.next();
    console.log("Yielded: " + value.value);
    console.log("Done?", value.done);
    console.log();
}, 1000);

setTimeout(function () {
    var value = running_gen.next("sent value");
    console.log("Yielded: " + value.value);
    console.log("Done?", value.done);
}, 2000);
