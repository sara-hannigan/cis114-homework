'use strict'

// Sara Hannigan
// sarahannigan@my.smccd.edu
// CIS 114 OL
// code.js
// Lab 13
// 11/29/2020

$(function () {

// You MUST use jQuery to do the following:

// display 'Lab 13' in the h1 element
$('h1').text('Lab 13');
// display 'I like jQuery!' in the h2 element	
$('h2').text('I like jQuery!');
// display 'https://brand.jquery.org/resources/jquery-mark-light.gif' in the img1 element
$('#img1').attr('src', 'https://brand.jquery.org/resources/jquery-mark-light.gif');
// display 'https://brand.jquery.org/resources/jquery-mark-dark.gif' in the img2 element
$('#img2').attr('src', 'https://brand.jquery.org/resources/jquery-mark-dark.gif');
  
// display this text in the element using the classname highlight:
// 'jQuery is a library of the JavaScript functions that you are most likely to need when developing websites.'
$('.highlight').text('jQuery is a library of the JavaScript functions that you are most likely to need when developing websites.');

// use append to add these list items to the ul element: (don't forget the <li> elements)
// "It's free.", "It lets you get more done in less time.", "All of its functions are cross-browser compatible."
$('ul').append("<li>It's free</li>");
$('ul').append("<li>It lets you get more done in less time.</li>");
$('ul').append("<li>All of its functions are cross-browser compatible.</li>");
})

