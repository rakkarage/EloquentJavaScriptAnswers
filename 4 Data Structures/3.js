function arrayToList(array) {
	let list = null
	for (let i = array.length - 1; i >= 0; i--)
		list = { value: array[i], rest: list }
	return list
}
function listToArray(list) {
	let array = []
	for (let node = list; node; node = node.rest)
		array.push(node.value)
	return array
}
function logList(list) {
	for (let node = list; node; node = node.rest)
		console.log(node.value + ' : ' + node.rest)
}
function prepend(element, list) {
	return { value: element, rest: list }
}
function nth(list, n) {
	let node = list
	for (let i = 0; node && i < n; i++)
		node = node.rest
	return (node === null) ? undefined : node.value
}
function nthRecursive(list, n) {
	if (n === 0 || list.rest === null) return list.value
	else return nthRecursive(list.rest, n - 1)
}
logList(arrayToList([10, 20, 30, 40, 50]))
console.log(listToArray(arrayToList([10, 20, 30, 40, 50])))
console.log(listToArray(arrayToList([10, 20, 30])))
logList(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 1))
console.log(nth(arrayToList([10, 20, 30]), 5))
console.log(nthRecursive(arrayToList([0, 11, 22, 33, 44, 55, 66, 77]), 3))
console.log(nthRecursive(arrayToList([0, 11, 22, 33, 44, 55, 66, 77]), 9))
