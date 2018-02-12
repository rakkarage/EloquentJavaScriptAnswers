for (let i = 1; i <= 100; i++)
{
	const five = (i % 5) === 0;
	const three = (i % 3) === 0;
	if (three && five)
		console.log('FizzBuzz');
	else if (three)
		console.log('Fizz');
	else if (five)
		console.log('Buzz');
	else
		console.log(i);
}
