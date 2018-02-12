function arrayToList(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {
		let o = { value: array[i], rest: list };
		list = o;
	}
	return list;
}
function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest)
		array.push(node.value);
	return array;
}
function logList(list) {
	for (let node = list; node; node = node.rest)
		console.log(node.value + ' : ' + node.rest);
}
function prepend(element, list) {
	return { value: element, rest: list };
}
function nth(list, n) {
	let node = list;
	for (let i = 0; node && i < n; i++)
		node = node.rest;
	return (node == null) ? undefined : node.value;
}
logList(arrayToList([10, 20, 30, 40, 50]));
console.log(listToArray(arrayToList([10, 20, 30, 40, 50])));
console.log(listToArray(arrayToList([10, 20, 30])));
logList(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth(arrayToList([10, 20, 30]), 5));
