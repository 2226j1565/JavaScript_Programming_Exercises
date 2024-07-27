const countriesAPI = 'https://restcountries.com/v2/all';

const mostSpokenLanguages = async (countries, topN) => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    const languageCounts = {};
    data.forEach(country => {
      const languages = country.languages;
      if (languages) {
        languages.forEach(language => {
          const langName = language.name;
          languageCounts[langName] = (languageCounts[langName] || 0) + 1;
        });
      }
    });
    const languageArray = Object.entries(languageCounts)
      .map(([language, count]) => ({ [language]: count }));

    const sortedLanguages = languageArray.sort((a, b) => {
      const countA = Object.values(a)[0];
      const countB = Object.values(b)[0];
      return countB - countA;
    }).slice(0, topN);

    return sortedLanguages;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

mostSpokenLanguages(countries, 10).then(result => {
  console.log(result);
});

mostSpokenLanguages(countries, 3).then(result => {
  console.log(result);
});
