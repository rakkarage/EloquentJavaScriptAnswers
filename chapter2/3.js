const height = 4;
const width = 2;
let output = '';
let fill = false;
for (let y = 0; y < height; y++)
{
	for (let x = 0; x < width; x++)
	{
		output += fill ? '#' : ' ';
		fill = !fill;
	}
	output += '\n';
	fill = !fill;
}
console.log(output);
