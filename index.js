console.log('index.js has started running');

let person = {
    firstName: "Dawson",
    lastName: "Richey",
    age: 32
}


// Import stylesheets
import './css/style.css';
// Import additional js files
import './js/utils.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Section for writing bootstrap code
const bootstrapDiv = document.getElementById('bootstrap');
bootstrapDiv.innerHTML = `<h2>Bootstrap Section</h2>`;

// Section for writing jQuery code
const jQueryDiv = document.getElementById('jQuery');
jQueryDiv.innerHTML = `<h3>jQuery Section</h3>`;

// Section for writing jQuery code
const jQueryDiv = document.getElementById('person');
jQueryDiv.innerHTML = `
    <p>${person.firstName}</p
    <p>${person.lastName}</p>
    <p>${person.age}</p>
`;

console.log('index.js has stoped running');
