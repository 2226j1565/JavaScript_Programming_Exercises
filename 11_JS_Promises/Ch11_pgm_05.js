
const countriesAPI = 'https://restcountries.com/v2/all';
const fetchCountryDetails = async () => {
    try {
        const response = await fetch(countriesAPI);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const countries = await response.json();
        countries.forEach(country => {
            const { name, capital, languages, population, area } = country;
            const languageNames = languages.map(lang => lang.name).join(', '); // Joining languages as a string
            
            console.log(`Country: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Languages: ${languageNames}`);
            console.log(`Population: ${population}`);
            console.log(`Area: ${area}`);
            console.log('------------------------------');
        });
    } catch (error) {
        console.error('Error fetching country details:', error);
    }
};
fetchCountryDetails();
