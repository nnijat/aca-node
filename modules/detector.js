'use strict';

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
    else if (askedQuestion.includes('let')) {
        operator = 'let';
        return operator;
    }
}

module.exports = operatorDetector;