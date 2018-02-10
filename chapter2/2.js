for (var x = 1; x <= 100; x++)
{
	var five = (x % 5) == 0;
	var three = (x % 3) == 0;
	if (three && five)
		console.log('FizzBuzz');
	else if (three)
		console.log('Fizz');
	else if (five)
		console.log('Buzz');
	else
		console.log(x);
}