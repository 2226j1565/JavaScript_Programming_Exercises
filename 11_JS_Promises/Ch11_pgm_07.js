const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchAverageCatWeight = async () => {
    try {
        const response = await fetch(catsAPI);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const catBreeds = await response.json();
        
        // Calculate total weight and number of breeds
        let totalWeight = 0;
        let count = 0;
        
        catBreeds.forEach(breed => {
            if (breed.weight && breed.weight.metric) {
                const weightRange = breed.weight.metric.split(' - ');
                const averageWeight = (parseFloat(weightRange[0]) + (weightRange[1] ? parseFloat(weightRange[1]) : parseFloat(weightRange[0]))) / 2;
                totalWeight += averageWeight;
                count++;
            }
        });
        
        const averageCatWeight = totalWeight / count;
        console.log(`Average cat weight: ${averageCatWeight.toFixed(2)} kg`);
        return averageCatWeight;
    } catch (error) {
        console.error('Error fetching cat weight data:', error);
    }
};

fetchAverageCatWeight();
const countriesAPI = 'https://restcountries.com/v2/all';

const fetchTop10LargestCountries = async () => {
    try {
        const response = await fetch(countriesAPI);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const countries = await response.json();
        
        // Sort countries by area in descending order and get the top 10
        const top10Largest = countries
            .sort((a, b) => b.area - a.area)
            .slice(0, 10);
        
        top10Largest.forEach(country => {
            console.log(`${country.name}: ${country.area} sq km`);
        });
        
        return top10Largest;
    } catch (error) {
        console.error('Error fetching countries data:', error);
    }
};

fetchTop10LargestCountries();
const countriesAPI = 'https://restcountries.com/v2/all';

const fetchTotalNumberOfLanguages = async () => {
    try {
        const response = await fetch(countriesAPI);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const countries = await response.json();
        
        // Aggregate all unique languages
        const languages = new Set();
        
        countries.forEach(country => {
            if (country.languages) {
                country.languages.forEach(language => {
                    languages.add(language.name);
                });
            }
        });
        
        console.log(`Total number of unique official languages: ${languages.size}`);
        return languages.size;
    } catch (error) {
        console.error('Error fetching languages data:', error);
    }
};

fetchTotalNumberOfLanguages();
