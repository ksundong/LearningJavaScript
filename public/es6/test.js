'use strict'
// es6 function: Declare block scope variable.
const sentences = [
    { subject: 'JavaScript', verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large' },
];
// es6 function: Disassemble Object
function say({ subject, verb, object }) {
    // es6 function: template string
    // below character is not a semicolon but back tick(`).
    // back tick is direactly above 'Tab' key.
    console.log(`${subject} ${verb} ${object}`);
}
// es6 function: for..of
for(let s of sentences) {
    say(s);
}
