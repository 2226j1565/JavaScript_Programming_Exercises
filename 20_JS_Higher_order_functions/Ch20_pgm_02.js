const totalPrice = products
  .filter(product => typeof product.price === 'number' && product.price > 0)
  .reduce((total, product) => total + product.price, 0);

console.log(totalPrice);
const sumPrice = products.reduce((sum, product) => {
  const price = parseFloat(product.price); // Convert price to number
  return !isNaN(price) ? sum + price : sum; // Add to sum if price is valid
}, 0);

console.log(sumPrice);
function categorizeCountries(patterns) {
  return countries.filter(country => patterns.some(pattern => country.includes(pattern)));
}

const patterns = ['land', 'ia', 'island', 'stan'];
const categorizedCountries = categorizeCountries(patterns);
console.log(categorizedCountries);
function countInitialLetters(countries) {
  const letterCount = countries.reduce((countMap, country) => {
    const initial = country[0].toUpperCase();
    countMap[initial] = (countMap[initial] || 0) + 1;
    return countMap;
  }, {});

  return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
}

const letterCounts = countInitialLetters(countries);
console.log(letterCounts);
function getFirstTenCountries(countries) {
  return countries.slice(0, 10);
}

const firstTenCountries = getFirstTenCountries(countries);
console.log(firstTenCountries);
function getLastTenCountries(countries) {
  return countries.slice(-10);
}

const lastTenCountries = getLastTenCountries(countries);
console.log(lastTenCountries);
function mostFrequentInitialLetter(countries) {
  const letterCount = countries.reduce((countMap, country) => {
    const initial = country[0].toUpperCase();
    countMap[initial] = (countMap[initial] || 0) + 1;
    return countMap;
  }, {});

  return Object.entries(letterCount).reduce((mostFrequent, [letter, count]) => {
    return count > mostFrequent.count ? { letter, count } : mostFrequent;
  }, { letter: '', count: 0 });
}

const frequentInitialLetter = mostFrequentInitialLetter(countries);
console.log(frequentInitialLetter);
