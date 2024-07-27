const companies = new Set();
console.log(companies); 
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages); 
const companies = new Set(); 
console.log(companies.size); 

companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Oracle');
companies.add('Microsoft');

console.log(companies.size); 
console.log(companies); 
const companiesArray = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];
const setOfCompanies = new Set();

for (const company of companiesArray) {
  setOfCompanies.add(company);
}

console.log(setOfCompanies); 
console.log(companies.delete('Google')); 
console.log(companies.size); 
console.log(companies.has('Apple')); 
console.log(companies.has('Facebook')); 
companies.clear();
console.log(companies);
const setOfLanguages = new Set(languages);

for (const language of setOfLanguages) {
  console.log(language);
}
setOfLanguages.forEach(language => {
  console.log(language);
});
const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers);
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);
let C = new Set([...A, ...B]);

console.log(C); 
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let intersection = a.filter(num => B.has(num));
let C = new Set(intersection);

console.log(C); 
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];

let A = new Set(a);
let B = new Set(b);

let difference = a.filter(num => !B.has(num));
let C = new Set(difference);

console.log(C); 




