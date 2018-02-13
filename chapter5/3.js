function every(array, test) {
	for (let i of array)
		if (!test(i))
			return false;
	return true;
}
function everySome(array, test) {
	return !array.some(test);
}
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
console.log(everySome([1, 3, 5], n => !(n < 10)));
console.log(everySome([2, 4, 16], n => !(n < 10)));
console.log(everySome([], n => !(n < 10)));
