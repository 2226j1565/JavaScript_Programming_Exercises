function callback(item) {
    console.log(item);
}

countries.forEach(callback);
countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
const countriesUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesUpperCase);
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);
const numbersSquared = numbers.map(number => number * number);
console.log(numbersSquared);
const namesUpperCase = names.map(name => name.toUpperCase());
console.log(namesUpperCase);
const productPrices = products.map(product => product.price);
console.log(productPrices);
const countriesContainingLand = countries.filter(country => country.toLowerCase().includes('land'));
console.log(countriesContainingLand);
const countriesWithSixCharacters = countries.filter(country => country.length === 6);
console.log(countriesWithSixCharacters);
const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);
const countriesNotStartingWithE = countries.filter(country => !country.startsWith('E'));
console.log(countriesNotStartingWithE);
const validPrices = products.filter(product => typeof product.price === 'number' && !isNaN(product.price));
console.log(validPrices);
function getStringLists(array) {
    return array.filter(item => typeof item === 'string');
}
const stringItems = getStringLists([...]);
console.log(stringItems);
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
const concatenatedCountries = countries.reduce((accumulator, currentValue, index) => {
    if (index === countries.length - 1) {
        return accumulator + 'and ' + currentValue;
    } else {
        return accumulator + currentValue + ', ';
    }
}, '');

const sentence = `${concatenatedCountries} are north European countries.`;
console.log(sentence);
const hasNameWithLengthGreaterThanSeven = names.some(name => name.length > 7);
console.log(hasNameWithLengthGreaterThanSeven);
const allCountriesContainLand = countries.every(country => country.toLowerCase().includes('land'));
console.log(allCountriesContainLand);
const countryWithSixLetters = countries.find(country => country.length === 6);
console.log(countryWithSixLetters);
const indexCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(indexCountryWithSixLetters);
const indexNorway = countries.findIndex(country => country === 'Norway');
console.log(indexNorway);
const indexRussia = countries.findIndex(country => country === 'Russia');
console.log(indexRussia);

