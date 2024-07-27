const emptySet = new Set();
console.log(emptySet); 
const numbersSet = new Set();
for (let i = 0; i <= 10; i++) {
  numbersSet.add(i);
}
console.log(numbersSet); 
const numbersSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numbersSet.delete(5); 
console.log(numbersSet); 
const numbersSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numbersSet.clear();
console.log(numbersSet); 
const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
const countriesSet = new Set(countries);
console.log(countriesSet); 
const countries = ['Finland', 'Sweden', 'Norway'];
const countriesMap = new Map();

countries.forEach(country => {
  countriesMap.set(country, country.length);
});

console.log(countriesMap);

