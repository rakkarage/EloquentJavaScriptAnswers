class Group2Iterator {
	constructor(group2) {
		this.i = 0
		this.group2 = group2
	}
	next() {
		return { value: this.group2.array[this.i++], done: this.group2.array.includes[this.i] }
	}
	get value() {
		return this.group2.array[this.i]
	}
}
class Group2 {
	constructor() {
		this.array = []
	}
	static from(o) {
		let g = new Group2()
		for (let i = 0; i < o.length; i++)
			g.add(o[i])
		return g
	}
	add(i) {
		if (!this.has(i))
			this.array.unshift(i)
	}
	delete(i) {
		if (this.has(i))
			this.array = this.array.filter(t => t !== i)
	}
	has(i) {
		return this.array.includes(i)
	}
	[Symbol.iterator]() {
		return new Group2Iterator();
	}
}
for (let value of Group2.from(["a", "b", "c"])) {
	console.log(value);
}
