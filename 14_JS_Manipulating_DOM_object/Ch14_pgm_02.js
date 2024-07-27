<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countries List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            width: 80%;
            max-width: 800px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            background-color: #fff;
            border: 1px solid #ddd;
            margin: 5px 0;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 18px;
            display: flex;
            align-items: center;
        }
        .flag {
            width: 40px;
            height: 30px;
            margin-right: 15px;
            border-radius: 3px;
        }
        .country-name {
            flex: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>List of Countries</h1>
        <ul id="countries-list"></ul>
    </div>
    <script src="script.js"></script>
</body>
</html>

const countries = [
    { name: 'Finland', flag: 'https://restcountries.com/v2/flags/fi.svg' },
    { name: 'Sweden', flag: 'https://restcountries.com/v2/flags/se.svg' },
    { name: 'Norway', flag: 'https://restcountries.com/v2/flags/no.svg' },
];

function displayCountries() {
    const ul = document.getElementById('countries-list');

    countries.forEach(country => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = country.flag;
        img.alt = `${country.name} flag`;
        img.classList.add('flag');

        const span = document.createElement('span');
        span.textContent = country.name;
        span.classList.add('country-name');

        li.appendChild(img);
        li.appendChild(span);
        ul.appendChild(li);
    });
}

displayCountries();
