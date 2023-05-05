function startQuiz() {
	const guess = prompt('Where is this flag 🇺🇸 from?');

	if (guess.toLowerCase() === 'usa') {
		alert('Your guessed correctly!');
	}
	else {
		alert('Sorry, the correct answer was USA.');
	}

	const guess2 = prompt('Where is this flag 🇸🇬 from?');

	if (guess2.toLowerCase() === 'singapore') {
		alert('You guessed correctly again!');
	}
	else {
		alert('Sorry, the correct answer was Singapore.');
	}
}