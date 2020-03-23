var SMALLCHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
var NUMBERS = '0123456789';
var SPECIAL = '!"§$%&/()=?;:_,.-+#';
var BIGCHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var numberCheckbox = document.querySelector('.numbers-checkbox');
var smallcharactersCheckbox = document.querySelector('.smallcharacters-checkbox');
var specialCheckbox = document.querySelector('.special-checkbox');
var bigcharactersCheckbox = document.querySelector('.bigcharacters-checkbox');

var outputArea = document.getElementById('result');

document.querySelector('.generate').addEventListener('click', function() {
    var passwortLength = document.querySelector('.password-length').value;
    var result = '';

    var resultString = '';

    if (numberCheckbox.checked) {
        resultString = resultString + NUMBERS;
    }

    if (smallcharactersCheckbox.checked) {
        resultString = resultString + SMALLCHARACTERS;
    }

    if (bigcharactersCheckbox.checked) {
        resultString = resultString + BIGCHARACTERS;       
    }

    if (specialCheckbox.checked) {
        resultString = resultString + SPECIAL;
    }

    if (resultString === '') {
        alert("Bitte wähle mindestens eine Option aus");
    }
    
    for (var i = 0; i < passwortLength; i++) {
        result = result + resultString.charAt(Math.floor(Math.random() * resultString.length));;
    }
    outputArea.value = result;
});
