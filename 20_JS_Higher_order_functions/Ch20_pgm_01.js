
numbers.forEach(num => console.log(num));
const upperCaseCountries = countries.map(country => country.toUpperCase());
const countriesWithLand = countries.filter(country => country.includes('land'));
const sum = numbers.reduce((total, num) => total + num, 0);
function printElement(element) {
  console.log(element);
}
countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
const upperCaseCountries = countries.map(country => country.toUpperCase());
console.log(upperCaseCountries);
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);
const prices = products.map(product => product.price);
console.log(prices);
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);
const sixLetterCountries = countries.filter(country => country.length === 6);
console.log(sixLetterCountries);
const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);
const validPrices = products.filter(product => product.price.trim() !== '');
console.log(validPrices);
function getStringLists(array) {
  return array.filter(item => typeof item === 'string');
}

const mixedArray = [1, 'hello', 2, 'world', true];
console.log(getStringLists(mixedArray));
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
const countrySentence = countries.reduce((sentence, country, index, array) => {
  if (index === array.length - 1) {
    return `${sentence} and ${country} are north European countries`;
  } else {
    return `${sentence}${country}, `;
  }
}, '');

console.log(countrySentence);
const hasLongName = names.some(name => name.length > 7);
const allContainLand = countries.every(country => country.includes('land'));
console.log(allContainLand);
const countryWithSixLetters = countries.find(country => country.length === 6);const countryWithSixLetters = countries.find(country => country.length === 6);
console.log(countryWithSixLetters);
const indexOfCountryWithSixLetters = countries.findIndex(country => country.length === 6);
const indexOfNorway = countries.findIndex(country => country === 'Norway');
console.log(indexOfNorway);
const indexOfRussia = countries.findIndex(country => country === 'Russia');
console.log(indexOfRussia);
