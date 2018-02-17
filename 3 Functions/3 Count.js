function countChar(value, character) {
	let count = 0
	for (let i = 0; i < value.length; i++)
		if (value.charAt(i) === character)
			count++
	return count
}
function countB(value) {
	return countChar(value, 'B')
}
console.log(countB('BBC'))
console.log(countChar('kakkerlak', 'k'))
