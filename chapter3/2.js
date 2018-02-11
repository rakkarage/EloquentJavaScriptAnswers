function isEven(value) {
	if (value < 0)
		value = -value;
	if (value < 2)
		return !value;
	else
		return isEven(value - 2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));
