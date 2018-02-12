function deepEqualJSON(a, b) {
	return JSON.stringify(a) === JSON.stringify(b);
}
function deepEqual(a, b) {
	if (a === b)
		return true;
	if (!(a instanceof Object) || !(b instanceof Object))
		return false;
	if (a.constructor !== b.constructor)
		return false;
	for (let p in a) {
		if (!a.hasOwnProperty(p))
			continue;
		if (!b.hasOwnProperty(p))
			return false;
		if (a[p] === b[p])
			continue;
		if (typeof a[p] != 'object')
			return false;
		if (!deepEqual(a[p], b[p]))
			return false;
	}
	for (let p in b)
		if (b.hasOwnProperty(p) && !a.hasOwnProperty(p))
			return false;
	return true;
}
let obj = {here: {is: 'an'}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: 'an'}, object: 2}));
console.log(deepEqual(1, 1));
console.log(deepEqual(1, 2));
console.log(deepEqualJSON(obj, obj));
console.log(deepEqualJSON(obj, {here: 1, object: 2}));
console.log(deepEqualJSON(obj, {here: {is: 'an'}, object: 2}));
console.log(deepEqualJSON(1, 1));
console.log(deepEqualJSON(1, 2));
