"use strict"

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   code.js
   Assignment 7
   12/5/2020
*/

$(function() {
	let apiKey = 'fca85753526d1d744f6bb99c08a968c5'
	
	let url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${apiKey}&extras=url_z,date_taken` + 
`&format=json&nojsoncallback=1`
				
	// fetch the data using jQuery getJSON
	$.getJSON(url, function (data) {
		let html = ""
		let photos = data.photos.photo
		
		// Place $.each function here	
		$.each(photos, function (key, value) {	
			// Break down the value into different variables
			let imgURL =  value.url_z
			let title = value.title
			let dateTaken = value.datetaken
			// Create img element and assign the url to the src property
			// apppend it to the html string
			let img = `<img src=${imgURL}>`
			html += img
			// Create an h2 element containing the title
			// append it to the html string
			let h2 = `<h2>${title}</h2>` 
			html += h2
			// Create a p element containing the date taken
			// append it to the html string
			let p = `<p>${dateTaken}</p>`
			html += p
		}) // end $.each
		
		// Place the html string in the photos div element
		$("#photos").append(html)
	}).fail(function (xhr, status, error) {
		alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
	}); 
})
