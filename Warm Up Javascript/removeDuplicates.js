function remDup(arr) {
	let myNonDuplicateArray = arr.reduce((acc, curr, index, a) => {
		// if (acc.indexOf(curr) === -1) acc.push(curr);
		if (!acc.includes(curr)) acc.push(curr);
		return acc;
	}, []);
	return myNonDuplicateArray;
}

const arr = remDup(["a", "b", "c", "d", "a", "b", "b", "c", "d"]);
console.log(arr);
