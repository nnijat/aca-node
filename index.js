const readline = require('readline');

const add = require('./modules/add');
const subtract = require('./modules/subtract');
const multiply = require('./modules/multiply');
const divide = require('./modules/divide');

const less = require('./modules/less');
const greater = require('./modules/greater');
const equal = require('./modules/equal');
const notEqual = require('./modules/notEqual');

const operatorDetector = require('./modules/detector')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let num1;
let num2;


rl.question('What do you want to ask? ', (askedQuestion) => {
    answerAI(askedQuestion);
    return rl.close();
});

function answerAI(askedQuestion) {
    let operator = operatorDetector(askedQuestion);
    switch (operator) {
        /*********************************************** Calculator ******************************************************/
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

        /************************************************ Bool ***********************************************************/
        case '<':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.indexOf(operator) + 1, askedQuestion.length - 1));

            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(less(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        case '>':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.indexOf(operator) + 1, askedQuestion.length - 1));

            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(greater(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        case '===':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.lastIndexOf("=") + 1, askedQuestion.length));

            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(equal(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;
        case '!==':
            num1 = Number(askedQuestion.substr(0, askedQuestion.indexOf(operator)));
            num2 = Number(askedQuestion.substr(askedQuestion.lastIndexOf("=") + 1, askedQuestion.length - 1));

            if (/^\d+$/.test(num1) && /^\d+$/.test(num2)) {
                console.log(notEqual(num1, num2));
            } else {
                console.log("Invalid input, Please contact customer services");
            }
            break;

        default:
            console.log('Sorry, we can handle your own operator sign.');
    }
} 