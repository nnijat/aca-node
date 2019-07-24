'use strict';

//let askedQuestion = "";
let operator;

function operatorDetector(askedQuestion) {

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
    else if (askedQuestion.includes('>')) {
        operator = '>';
        return operator;
    }
    else if (askedQuestion.includes('<')) {
        operator = '<';
        return operator;
    }
    else if (askedQuestion.includes('===')) {
        operator = '===';
        return operator;
    }
    else if (askedQuestion.includes('!==')) {
        operator = '!==';
        return operator;
    }
}

module.exports = operatorDetector;