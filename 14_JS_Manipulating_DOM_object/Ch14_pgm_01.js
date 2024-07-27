<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Styling</title>
    <style>
        .number {
            font-size: 20px;
            padding: 10px;
            margin: 5px;
            display: inline-block;
            text-align: center;
            width: 50px;
            color: white;
            border-radius: 5px;
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
    <div id="container"></div>
    <script src="script.js"></script>
</body>
</html>

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function createNumberElements() {
    const container = document.getElementById('container');
    
    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.textContent = i;
        numberDiv.classList.add('number');
        
        if (isPrime(i)) {
            numberDiv.classList.add('prime');
        } else if (i % 2 === 0) {
            numberDiv.classList.add('even');
        } else {
            numberDiv.classList.add('odd');
        }
        
        container.appendChild(numberDiv);
    }
}

createNumberElements();
