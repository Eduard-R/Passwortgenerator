var CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
var NUMBERS = '0123456789';
var SPECIAL = '!"§$%&/()=?;:_,.-+#';

var numberCheckbox = document.querySelector('.numbers-checkbox');
var charactersCheckbox = document.querySelector('.characters-checkbox');
var specialCheckbox = document.querySelector('.special-checkbox');

var outputArea = document.getElementById('result');

document.querySelector('.generate').addEventListener('click', function() {
    var passwortLength = document.querySelector('.password-length').value;
    var result = '';

    var resultString = '';

    if (numberCheckbox.checked) {
        resultString = resultString + NUMBERS;
    }

    if (charactersCheckbox.checked) {
        resultString = resultString + CHARACTERS;
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
