function newPriorityList(item) {
	const Electronics = ["Mobile", "Watch", "Kindle"];
	const ans = [item, ...Electronics];
	return ans;
}

console.log(newPriorityList("Laptop"));
