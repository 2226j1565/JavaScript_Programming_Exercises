let pattern = 'love';
let regEx = new RegExp(pattern); 
let regExWithFlags = new RegExp(pattern, 'gi'); 
let regEx = /love/;
let regExWithFlags = /love/gi; 
const pattern = /love/;
console.log(pattern.test('I love JavaScript')); 
const str = 'I love JavaScript';
console.log(str.match(/love/)); 
console.log(str.match(/love/g)); 
console.log('I love JavaScript'.search(/love/)); 
console.log('I love Python'.replace(/Python/, 'JavaScript')); 
console.log('I love Python'.replace(/Python/g, 'JavaScript'));
const pattern = /[Aa]pple/g;
console.log('Apple apple'.match(pattern)); 
const pattern = /\d+/g;
console.log('In 2020'.match(pattern));
const pattern = /a./g;
console.log('apple and banana'.match(pattern)); 
const pattern = /a{2,4}/g; 
console.log('a aa aaa aaaa'.match(pattern)); 
const pattern = /^Hello/; 
console.log('Hello world'.match(pattern)); 
const pattern = /[^a-z]/g; 
console.log('abc123'.match(pattern)); 
const pattern = /(ab)+/g; 
console.log('ababab'.match(pattern)); 
const pattern = /apple|banana/g;
console.log('apple banana apple'.match(pattern)); 
const pattern = /(?<=\d{2})\d{2}/; 
console.log('1234'.match(pattern)); 




