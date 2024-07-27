const map = new Map();
console.log(map); 
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];

const map = new Map(countries);
console.log(map); 
console.log(map.size); 
const countriesMap = new Map();
console.log(countriesMap.size);

countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');

console.log(countriesMap); 
console.log(countriesMap.size); 
console.log(countriesMap.get('Finland')); 
console.log(countriesMap.has('Finland'));
console.log(countriesMap.has('Denmark')); 
console.log(countriesMap); 
countriesMap.clear();
console.log(countriesMap);
for (const [country, city] of countriesMap) {
  console.log(country, city);
}

for (const key of countriesMap.keys()) {
  console.log(key);
}

for (const value of countriesMap.values()) {
  console.log(value);
}

for (const [key, value] of countriesMap.entries()) {
  console.log(key, value);
}

