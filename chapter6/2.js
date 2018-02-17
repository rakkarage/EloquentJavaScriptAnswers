class Group {
	constructor() {
		this.array = []
	}
	static from(o) {
		let g = new Group()
		for (let i of o)
			g.add(i)
		return g;
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
}
let group = Group.from([10, 20])
console.log(group.has(10))
console.log(group.has(30))
group.add(10)
group.delete(10)
console.log(group.has(10))
