class Group2 {
	constructor() {
		this.array = []
	}
	static from(o) {
		let g = new Group2()
		for (let i of o)
			g.add(i)
		return g
	}
	add(i) {
		if (!this.has(i))
			this.array.push(i)
	}
	delete(i) {
		if (this.has(i))
			this.array = this.array.filter(t => t !== i)
	}
	has(i) {
		return this.array.includes(i)
	}
	[Symbol.iterator]() {
		return new Group2Iterator(this)
	}
}
class Group2Iterator {
	constructor(group2) {
		this.i = 0
		this.group2 = group2
	}
	next() {
		if (this.i >= this.group2.array.length)
			return { value: undefined, done: true }
		return { value: this.group2.array[this.i++], done: false }
	}
	value() {
		return this.group2.array[this.i]
	}
}
for (let value of Group2.from(['a', 'b', 'c'])) {
	console.log(value)
}
