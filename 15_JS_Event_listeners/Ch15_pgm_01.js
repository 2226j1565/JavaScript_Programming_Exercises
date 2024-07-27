<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f9f9f9;
        }
        .container {
            width: 80%;
            max-width: 1200px;
        }
        .number {
            display: inline-block;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 5px;
            margin: 5px;
            color: white;
            font-size: 18px;
        }
        .even {
            background-color: green;
        }
        .odd {
            background-color: yellow;
            color: black;
        }
        .prime {
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="container" id="number-container"></div>
    <script src="script.js"></script>
</body>
</html>

const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
const generateNumbers = (start, end) => {
    const container = document.getElementById('number-container');

    for (let i = start; i <= end; i++) {
        const div = document.createElement('div');
        div.textContent = i;
        div.classList.add('number');

        if (isPrime(i)) {
            div.classList.add('prime');
        } else if (i % 2 === 0) {
            div.classList.add('even');
        } else {
            div.classList.add('odd');
        }

        container.appendChild(div);
    }
}

generateNumbers(1, 100);
