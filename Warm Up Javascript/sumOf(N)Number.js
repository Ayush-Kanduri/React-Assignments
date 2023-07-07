function sumOfNumbers(...args) {
	return args.reduce((acc, item) => acc + item, 0);
}

console.log(sumOfNumbers(...[1, 2, 3, 4]));
