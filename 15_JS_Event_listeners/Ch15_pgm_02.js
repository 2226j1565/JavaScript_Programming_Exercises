<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard Code Display</title>
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
            text-align: center;
        }
        .display {
            font-size: 24px;
            margin: 20px 0;
        }
        .keycode {
            font-size: 40px;
            font-weight: bold;
            color: #333;
            background-color: #eee;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="display">Press any key:</div>
        <div class="keycode" id="keycode">_</div>
    </div>
    <script src="script.js"></script>
</body>
</html>
const handleKeyPress = (event) => {
    const keyCode = event.keyCode;
    const keycodeDisplay = document.getElementById('keycode');
    keycodeDisplay.textContent = keyCode;
}

document.addEventListener('keydown', handleKeyPress);
