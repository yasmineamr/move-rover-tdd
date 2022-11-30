const { main } = require('./main');

function testInput(input, expectedOutput) {
    const output = main(...input);
    if (output === expectedOutput) {
        console.log('Passed successfully!');
    } else {
        console.log(`Expected ${expectedOutput} but got ${output}!`);
    }
}

testInput(['0:0:N', ''], '0:0:N');
testInput(['0:0:N', 'L'], '0:0:W');
testInput(['0:0:N', 'R'], '0:0:E');
testInput(['0:0:N', 'RR'], '0:0:S');
testInput(['0:0:N', 'LL'], '0:0:S');
testInput(['0:0:N', 'M'], '0:1:N');
testInput(['0:0:N', 'LM'], '-1:0:W');
testInput(['0:0:N', 'RM'], '1:0:E');
testInput(['0:0:N', 'RRM'], '0:-1:S');
testInput(['0:0:N', 'LLM'], '0:-1:S');
