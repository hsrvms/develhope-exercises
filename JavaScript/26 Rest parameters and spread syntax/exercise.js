function sum(...args) {
    return args.reduce((acc, arg) => acc + arg, 0);
}

console.log(sum(1, 2, 3, 4, 5));