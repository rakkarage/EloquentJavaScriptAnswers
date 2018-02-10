function min(a, b) {
	let aMin = a < b;
	let bMin = b < a;
	if (aMin)
		return a;
	else if (bMin)
		return b;
}
console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(1, 1));
