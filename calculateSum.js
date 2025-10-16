document.addEventListener('DOMContentLoaded', function() {
	const sumButton = document.getElementById('sumButton');
	sumButton.addEventListener('click', function() {
		const num1 = parseInt(document.getElementById('num1').value, 10);
		const num2 = parseInt(document.getElementById('num2').value, 10);
		const result = num1 + num2;
		document.getElementById('result').innerText = `Result: ${result}`;
	});
});