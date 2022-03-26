window.$ = window.jQuery = require('jquery');

import "foundation-sites";
import "what-input";
import "./modules/_form.js"
 
$(document).foundation();
console.log(`Testing jQuery, this should be a one: ${$('body').length}`);
