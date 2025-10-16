document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sumButton').addEventListener('click', function () {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = num1 + num2;
        document.getElementById('result').innerText = 'Sum: ' + result;
    });
    document.getElementById('productButton').addEventListener('click', function () {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const result = num1 * num2;
        document.getElementById('result').innerText = 'Product: ' + result;
    });
});