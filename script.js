document.addEventListener('DOMContentLoaded', function () {
	const sumButton = document.getElementById('sumButton');
	const multiplyButton = document.getElementById('multiplyButton');
	const resultDisplay = document.getElementById('result');

	sumButton.addEventListener('click', function () {
		const num1 = parseFloat(document.getElementById('num1').value);
		const num2 = parseFloat(document.getElementById('num2').value);
		
		if (isNaN(num1) || isNaN(num2)) {
			resultDisplay.textContent = 'Please enter valid numbers';
			resultDisplay.className = 'error';
			return;
		}
		
		const sum = num1 + num2;
		resultDisplay.textContent = 'Sum: ' + sum;
		resultDisplay.className = 'success';
	});

	multiplyButton.addEventListener('click', function () {
		const num1 = parseFloat(document.getElementById('num1').value);
		const num2 = parseFloat(document.getElementById('num2').value);
		
		if (isNaN(num1) || isNaN(num2)) {
			resultDisplay.textContent = 'Please enter valid numbers';
			resultDisplay.className = 'error';
			return;
		}
		
		const product = num1 * num2;
		resultDisplay.textContent = 'Product: ' + product;
		resultDisplay.className = 'success';
	});
});