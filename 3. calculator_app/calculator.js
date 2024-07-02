const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('You need to provide a question.');
    process.exit(1);
}

const question = args.join(' ');

function calculate(question) {
    const words = question.toLowerCase().split(' ');
    
    if (words.length < 5 || words[0] !== 'what' || words[1] !== 'is') {
        return 'Invalid question format.';
    }
    
    const num1 = parseInt(words[2]);
    const num2 = parseInt(words[words.length - 1]);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Invalid numbers provided.';
    }
    
    let result;
    
    if (words.includes('plus')) {
        result = num1 + num2;
    } else if (words.includes('minus')) {
        result = num1 - num2;
    } else if (words.includes('multiplied') && words.includes('by')) {
        result = num1 * num2;
    } else if (words.includes('divided') && words.includes('by')) {
        result = num1 / num2;
    } else {
        return 'Unsupported operation.';
    }
    
    return `${num1} ${words.slice(3, -1).join(' ')} ${num2} is ${result}`;
}

console.log(calculate(question));
