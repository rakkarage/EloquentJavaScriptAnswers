function range(start, end, step = 1) {
	let data = [];
	if (end < start)
		for (let i = start; i >= end; i -= step)
			data.push(i);
	else
		for (let i = start; i <= end; i += step)
			data.push(i);
	return data;
}
function sum(values) {
	var total = 0;
	for (let value of values)
		total += value;
	return total;
}
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2));
console.log(sum(range(1, 10)));
