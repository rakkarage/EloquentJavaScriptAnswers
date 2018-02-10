for (let x = 1; x <= 100; x++)
{
	const five = (x % 5) == 0;
	const three = (x % 3) == 0;
	if (three && five)
		console.log('FizzBuzz');
	else if (three)
		console.log('Fizz');
	else if (five)
		console.log('Buzz');
	else
		console.log(x);
}
