// Store a simple string
localStorage.setItem('username', 'Alice');

localStorage.setItem('age', 25);


const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
localStorage.setItem('skills', JSON.stringify(skills));

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  skills: ['HTML', 'CSS', 'JavaScript'],
};
localStorage.setItem('user', JSON.stringify(user));

console.log(localStorage);

const username = localStorage.getItem('username');
console.log(username); // 'Alice'

const age = localStorage.getItem('age');
console.log(age); // '25'

const skillsJSON = localStorage.getItem('skills');
const skillsArray = JSON.parse(skillsJSON);
console.log(skillsArray); 


const userJSON = localStorage.getItem('user');
const userObject = JSON.parse(userJSON);
console.log(userObject); 

localStorage.removeItem('username');

localStorage.clear();

sessionStorage.setItem('sessionData', 'This is session data');
sessionStorage.setItem('sessionArray', JSON.stringify(['item1', 'item2']));

const sessionData = sessionStorage.getItem('sessionData');
const sessionArrayJSON = sessionStorage.getItem('sessionArray');
const sessionArray = JSON.parse(sessionArrayJSON);

console.log(sessionData); // 'This is session data'
console.log(sessionArray); // ['item1', 'item2']

sessionStorage.removeItem('sessionData');

sessionStorage.clear();
