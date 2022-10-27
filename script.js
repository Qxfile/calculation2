"use strict"

const buttonNumber = document.querySelector('.number');
const actionButtons = document.querySelectorAll('.button-minus');
const buttonResult = document.querySelector('.button-result');
const resultWindow = document.querySelector('input');
const clearAll = document.querySelector('.button-clear');
const toggleSign = document.querySelector('.button-sign-toggle');
const letNumber = document.querySelector('.button-dom');
const btnMoveClass = document.querySelectorAll('.button-minus')
const btnProcent = document.querySelector('.button-procent');
const btnClear = document.querySelector('.button-clear')
let firstNumber = '',
    action = '',
    secondNumber = '';

let arrNumber = [];

function clear() {
    btnClear.addEventListener('click', () => {
        firstNumber = '';
        action = '';
        secondNumber = '';
        resultWindow.value = 0;
    })
}

clear();

function addNumb() {


    buttonNumber.addEventListener('click', (e) => {
        if (action === '' && secondNumber === '') {

            firstNumber += event.target.value;
            console.log(firstNumber, action, secondNumber)
            resultWindow.value = firstNumber;
        }
        if (firstNumber !== '' && action !== '') {
            secondNumber += event.target.value;
            console.log(firstNumber, action, secondNumber)
            resultWindow.value = secondNumber;
        }
    });
    actionButtons.forEach(item => {
        item.addEventListener('click', (e) => {
            action = event.target.value;
            console.log(firstNumber, action, secondNumber)
            secondNumber = '';
        });
        if (firstNumber !== '' && action !== '' && secondNumber !== '') {
            console.log(4)
        }

    })

}

addNumb();

function result() {
    buttonResult.addEventListener('click', () => {
        switch (action) {
            case '+':
                firstNumber = (+firstNumber) + (+secondNumber);
                break;
            case '-':
                firstNumber = firstNumber - secondNumber;
                break;
            case '*':
                firstNumber = firstNumber * secondNumber;
                break;
            case '/':
                firstNumber = firstNumber / secondNumber;
                break;
        }
        resultWindow.value = firstNumber;
        if (firstNumber === Infinity) {
            alert('делить на ноль нельзя');
            firstNumber = '';
            action = '';
            secondNumber = '';
        }
        console.log(firstNumber)
    });
}

result();


// actionButtons.forEach(item => {
//     item.addEventListener('click', (e) => {
//
//     });
// });


btnProcent.addEventListener('click', () => {
    firstNumber = (+firstNumber) / 100;
    resultWindow.value = firstNumber;
})

toggleSign.addEventListener('click', () => {
   firstNumber = Math.sqrt(firstNumber)
    resultWindow.value = firstNumber;
})