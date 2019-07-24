const readline = require('readline');
const add = require('./modules/add');
const subtract = require('./modules/subtract');
const multiply = require('./modules/multiply');
const divide = require('./modules/divide');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let askedQuestion = "";
let num1;
let num2;
let operator;

rl.question('What do you want to ask? ', (answer) => {
    askedQuestion = answer
    answerAI();
    return rl.close();
});

function operatorDetector() {

    if (askedQuestion.includes('+')) {
        operator = '+';
        return operator;
    }
    else if (askedQuestion.includes('-')) {
        operator = '-';
        return operator;
    }
    else if (askedQuestion.includes('*')) {
        operator = '*';
        return operator;
    }
    else if (askedQuestion.includes('/')) {
        operator = '/';
        return operator;
    }
}

function answerAI() {
    switch (operatorDetector()) {
        case '+':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.indexOf(operator) + 1, askedQuestion.length - 1));
            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(add(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        case '-':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.indexOf(operator) + 1, askedQuestion.length - 1));
            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(subtract(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        case '*':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.indexOf(operator) + 1, askedQuestion.length - 1));
            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(multiply(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        case '/':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.indexOf(operator) + 1, askedQuestion.length - 1));
            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(divide(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        default:
            console.log('Sorry, we can handle your own operator sign.');
    }
} 