'use strict'
/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   code.js
   Assignment 3
   10/03/2020
*/

// Calculate the number of days until final exam using the Date class.
// Your program must work for the current date, not a fixed date.
// The final exam is Friday, December 18.

let currentDate = new Date()
let finalDate = new Date (2020, 11, 18)
let difference = finalDate.getTime() - currentDate.getTime()
let differenceInDays = difference / (1000 * 60 * 60 * 24)
differenceInDays = differenceInDays.toFixed(2)
// Display the number of days using template literals for the string.
let str = `${differenceInDays} days`
document.getElementById("message").innerHTML = str


// Choose a quote from https://www.brainyquote.com/quote_of_the_day
// Store the quote in a variable and the author in a separate variable
let quote = 'Without art, the crudeness of reality would make the world unbearable.'
let author = 'George Bernard Shaw'

// Create a regular expression and use it to count the number of words in the quote.
let wordCount = quote.match(/[a-zA-Z0-9]+/g).length
// Create another regular expression and use it to count a letter (A-Z) in the quote.
// Choose a letter and make sure that it does a case-insensitive search: a and A must be counted as the same letter.
let characterCount = quote.match(/a/gi).length

// Create and display a string containing the quote, the author, the word count and the letter count, clearly labeled.
// Use template literals to create the string.
let html = `${quote}<br>${author}<br>Word Count: ${wordCount}<br>Count of Character 'A': ${characterCount}`
 document.getElementById("quote").innerHTML = html
 
 