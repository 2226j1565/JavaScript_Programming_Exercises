const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const fetchCatNames = async () => {
    try {
        
        const response = await fetch(catsAPI);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const catBreeds = await response.json();
        const catNames = catBreeds.map(breed => breed.name);
        console.log(catNames);
        return catNames;
    } catch (error) {
        console.error('Error fetching cat names:', error);
    }
};
fetchCatNames();
