const height = 4;
const width = 2;
var output = '';
var fill = false;
for (var y = 0; y < height; y++)
{
	for (var x = 0; x < width; x++)
	{
		output += fill ? '#' : ' ';
		fill = !fill;
	}
	output += '\n';
	fill = !fill;
}
console.log(output);