
const countries = [
  { country: 'China', capital: 'Beijing', population: 1377422166, languages: ['Chinese'] },
  { country: 'India', capital: 'New Delhi', population: 1295210000, languages: ['Hindi', 'English'] },
  { country: 'United States of America', capital: 'Washington, D.C.', population: 323947000, languages: ['English'] },
  { country: 'Indonesia', capital: 'Jakarta', population: 258705000, languages: ['Indonesian'] },
  { country: 'Brazil', capital: 'Brasília', population: 206135893, languages: ['Portuguese'] },
  { country: 'Pakistan', capital: 'Islamabad', population: 194125062, languages: ['Urdu', 'English'] },
  { country: 'Nigeria', capital: 'Abuja', population: 186988000, languages: ['English'] },
  { country: 'Bangladesh', capital: 'Dhaka', population: 161006790, languages: ['Bengali'] },
  { country: 'Russian Federation', capital: 'Moscow', population: 146599183, languages: ['Russian'] },
  { country: 'Japan', capital: 'Tokyo', population: 126960000, languages: ['Japanese'] },
];
const sortedByName = countries.slice().sort((a, b) => a.country.localeCompare(b.country));
console.log('Sorted by Name:', sortedByName);
const sortedByCapital = countries.slice().sort((a, b) => a.capital.localeCompare(b.capital));
console.log('Sorted by Capital:', sortedByCapital);
const sortedByPopulation = countries.slice().sort((a, b) => b.population - a.population);
console.log('Sorted by Population:', sortedByPopulation);
function mostSpokenLanguages(countries, topN) {
  const languageCount = countries.reduce((acc, { languages }) => {
    languages.forEach(language => {
      acc[language] = (acc[language] || 0) + 1;
    });
    return acc;
  }, {});

  const sortedLanguages = Object.entries(languageCount)
    .map(([language, count]) => ({ country: language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);

  return sortedLanguages;
}

console.log(mostSpokenLanguages(countries, 10));
console.log(mostSpokenLanguages(countries, 3));
function mostPopulatedCountries(countries, topN) {
  return countries.slice()
    .sort((a, b) => b.population - a.population)
    .slice(0, topN)
    .map(({ country, population }) => ({ country, population }));
}

console.log(mostPopulatedCountries(countries, 10));
console.log(mostPopulatedCountries(countries, 3));
