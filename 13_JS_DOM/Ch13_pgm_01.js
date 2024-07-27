<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paragraph Manipulation</title>
    <style>
        .red {
            color: red;
        }
        .green {
            color: green;
        }
    </style>
</head>
<body>
    <p id="first">First Paragraph</p>
    <p id="second">Second Paragraph</p>
    <p id="third">Third Paragraph</p>
    <p id="fourth">Fourth Paragraph</p>

    <script src="script.js"></script>
</body>
</html>

const firstParagraphByTag = document.querySelector('p');
console.log(firstParagraphByTag.textContent); 

const firstParagraphById = document.querySelector('#first');
const secondParagraphById = document.querySelector('#second');
const thirdParagraphById = document.querySelector('#third');
const fourthParagraphById = document.querySelector('#fourth');

console.log(firstParagraphById.textContent); 
console.log(secondParagraphById.textContent); 
console.log(thirdParagraphById.textContent); 
console.log(fourthParagraphById.textContent); 


const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs); 

allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

fourthParagraphById.textContent = 'Updated Fourth Paragraph';
console.log(fourthParagraphById.textContent); 

allParagraphs.forEach((paragraph, index) => {
    paragraph.id = `paragraph-${index + 1}`;
    paragraph.className = (index % 2 === 0) ? 'red' : 'green'; 
});

allParagraphs.forEach(paragraph => {
    paragraph.style.color = 'blue'; 
    paragraph.style.backgroundColor = 'lightgray'; 
    paragraph.style.border = '1px solid black'; 
    paragraph.style.fontSize = '16px'; 
    paragraph.style.fontFamily = 'Arial'; 
});

allParagraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) { 
        paragraph.style.color = 'green';
    } else { 
        paragraph.style.color = 'red';
    }
});

allParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated Paragraph ${index + 1}`;
    paragraph.id = `updated-paragraph-${index + 1}`;
    paragraph.className = (index % 2 === 0) ? 'red' : 'green'; 
});
