function reverseArray(array) {
	let newArray = []
	for (let item of array)
		newArray.unshift(item)
	return newArray
}
function reverseArrayInPlace(array) {
	let half = Math.floor(array.length / 2)
	for (let i = 0; i < half; i++) {
		let swap = array[i]
		array[i] = array[array.length - 1 - i]
		array[array.length - 1 - i] = swap
	}
}
console.log(reverseArray(['A', 'B', 'C']))
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
