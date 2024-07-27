const url = 'https://restcountries.com/v2/all';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    // Display names of all countries
    data.forEach(country => {
      console.log(country.name);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
