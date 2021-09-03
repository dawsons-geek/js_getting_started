console.log('index.js has started running');

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

console.log('index.js has stoped running');
