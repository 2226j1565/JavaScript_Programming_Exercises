<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <div class="wrapper">
        <h1>JavaScript Challenges in 2024</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
  </body>
</html>

function changeYearColor() {
    const year = new Date().getFullYear(); 
    const yearElement = document.createElement('h3');
    yearElement.textContent = year;
    yearElement.style.fontSize = '2em';
    document.body.prepend(yearElement); 

    setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        yearElement.style.color = randomColor;
    }, 1000); 
}

function changeDateTimeBackgroundColor() {
    const dateTimeElement = document.createElement('h3');
    dateTimeElement.textContent = new Date().toLocaleString(); 
    dateTimeElement.style.fontSize = '1.5em';
    dateTimeElement.style.marginTop = '20px';
    document.body.prepend(dateTimeElement); 

    setInterval(() => {
        
        const randomBackgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        dateTimeElement.style.backgroundColor = randomBackgroundColor;
        dateTimeElement.style.color = '#ffffff';
    }, 1000);
}

function setChallengeBackgrounds() {
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        if (item.textContent.includes('Done')) {
            item.style.backgroundColor = 'green';
        } else if (item.textContent.includes('Ongoing')) {
            item.style.backgroundColor = 'yellow';
        } else if (item.textContent.includes('Coming')) {
            item.style.backgroundColor = 'red';
        }
        item.style.color = '#ffffff'; 
        item.style.padding = '10px'; 
        item.style.margin = '5px 0'; 
        item.style.borderRadius = '5px'; 
    });
}

// Call the functions to apply the changes
changeYearColor();
changeDateTimeBackgroundColor();
setChallengeBackgrounds();
