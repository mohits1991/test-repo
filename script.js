document.addEventListener('DOMContentLoaded', function () {
	const sumButton = document.getElementById('sumButton');
	const resultDisplay = document.getElementById('result');

	sumButton.addEventListener('click', function () {
		const num1 = parseFloat(document.getElementById('num1').value);
		const num2 = parseFloat(document.getElementById('num2').value);
		const sum = num1 + num2;
		resultDisplay.textContent = 'Sum: ' + sum;
	});
});