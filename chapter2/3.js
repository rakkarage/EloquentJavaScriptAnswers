const height = 4;
const width = 6;
let output = '';
for (let y = 0; y < height; y++) {
	for (let x = 0; x < width; x++) {
		if ((x + y) % 2 == 0)
			output += ' ';
		else
			output += '#';
	}
	output += '\n';
}
console.log(output);
