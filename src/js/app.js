window.$ = window.jQuery = require('jquery');

import "foundation-sites";
import "what-input";

import "./modules/_form.js"
 
console.log($('body').length);
console.log($('body').length * 2);

let theDoc = $(document)[0]; 

if (theDoc.hasOwnProperty('foundation')) {
  console.log('IT HAS THE PROP FOUNDATION!');
} else {
  console.log('IT NOT HAS THE PROP FOUNDATION!');
}

console.log('HYYAAaAAwdwadawdA'); 

$(document).foundation();
console.log('banana');
