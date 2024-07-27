const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const union = new Set([...a, ...b]);
console.log(Array.from(union)); 
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const intersection = new Set(a.filter(item => b.includes(item)));
console.log(Array.from(intersection)); 
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const difference = new Set(a.filter(item => !b.includes(item)));
console.log(Array.from(difference)); 
