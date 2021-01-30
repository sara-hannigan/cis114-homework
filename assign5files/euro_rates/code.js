"use strict"

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   code.js
   Assignment 5
   11/08/2020
*/


// use fetch to get current Euro exchange rate
// 'https://api.frankfurter.app/latest'
const url = 'https://api.frankfurter.app/latest'
	 fetch(url) 
		 .then((resp) => resp.json())
		 .then(function(data) {
			let html = "<div class='special'>"
			// enclose date in <h2> element and append to the html string
			// get the date and rate fields
			html += `<h2>${data.date}</h2>`
			// start unordered list
			html += "<h2><ul>"
			// iterate through the rates and enclose key-value pairs
			// enclose in an <li> element with closing </li>
			// append each to the html string
			for (const rate in data.rates) {
				html += `<li>${rate}: ${data.rates[rate]}</li>`
			}
			// after the loop close the list and div elements
			html += "</ul></h2></div>"

			// display the html string on the web page
			document.getElementById("list").innerHTML = html  

		 })
		// place at end of fetch for error handling
		.catch(function(error) {
			console.log(error)
	})
  

