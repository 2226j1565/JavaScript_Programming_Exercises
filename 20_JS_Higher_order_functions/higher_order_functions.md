const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num));

let sum = 0;
numbers.forEach(num => sum += num);
console.log('Sum:', sum);
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);
console.log('Squared Numbers:', squaredNumbers);

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log('Uppercase Countries:', upperCaseCountries);
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];

const countriesWithLand = countries.filter(country => country.includes('land'));
console.log('Countries with "land":', countriesWithLand);

const sixLetterCountries = countries.filter(country => country.length === 6);
console.log('Six-letter Countries:', sixLetterCountries);
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('Sum:', sum);

const product = numbers.reduce((acc, cur) => acc * cur, 1);
console.log('Product:', product);
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);
console.log('All numbers are even:', allEven);
const numbers = [1, 3, 5, 7, 9];

const foundNumber = numbers.find(num => num > 5);
console.log('First number greater than 5:', foundNumber);
const numbers = [1, 3, 5, 7, 9];

const index = numbers.findIndex(num => num > 5);
console.log('Index of the first number greater than 5:', index);
const numbers = [10, 5, 100, 50, 1];

numbers.sort((a, b) => a - b);
console.log('Sorted Numbers (ascending):', numbers);

numbers.sort((a, b) => b - a);
console.log('Sorted Numbers (descending):', numbers);

const countries = [
  { name: 'Finland', population: 5560000 },
  { name: 'Denmark', population: 5800000 },
  { name: 'Sweden', population: 10000000 },
  { name: 'Norway', population: 5300000 },
  { name: 'Iceland', population: 370000 }
];

countries.sort((a, b) => b.population - a.population);
console.log('Countries sorted by population:', countries);
function greet() {
  console.log('Hello!');
}

const intervalId = setInterval(greet, 2000);
function sayHello() {
  console.log('Hello after 3 seconds!');
}

const timeoutId = setTimeout(sayHello, 3000);
