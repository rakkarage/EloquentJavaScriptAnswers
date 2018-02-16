class Vector {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	plus(other) {
		return { x: this.x + other.x, y: this.y + other.y }
	}
	minus(other) {
		return { x: this.x - other.x, y: this.y - other.y }
	}
	get length() { return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)) }
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);
