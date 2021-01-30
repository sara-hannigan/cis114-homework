'use strict'
/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   music.js
   Final Assignment
   12/14/2020
*/
$(function() {

   // perform artist search when the button is clicked
   $('#searchButton').click(function(e) {
      e.preventDefault()
	  let artistName = $('#userInput').val().trim()

	  // create URL here with the artist name input by the user
	  const url = `https://itunes.apple.com/search?term=${artistName}&country=US&media=music&entity=album&limit=20`
	  // call the getJSON method to retrieve the data, using the URL
	  $.getJSON(url, function(data) {
		// use the html variable for the output
		let html = ""
		// use $.each method to build up output for each album
		$.each(data.results, function(key, value) {
			// Create the div with styling to allow the text display
			html += `<div id="album" style="clear: left;">`	
			// APPEND ALL OF THESE TO THE html VARIABLE
			// Wrap the image in a floating paragraph to get the details to display on the right
			html += `<p style="float: left;">`
			// create img element with id art using image file for src
			html += `<img src=${value.artworkUrl100}>`
			// Wrap the image <p>
			html += `</p>`
			// create p element for the artist name
			html += `<b><p>${value.artistName}</p></b>`
			// create p element for album name
			html += `<p>${value.collectionName}</p>`
			// create p element for price and currency
			html += `<p>$${value.collectionPrice} ${value.currency}</p>`
			// create p element for the genre
			html+= `<p>${value.primaryGenreName}</p>`
			// close the div element
			html += `</div>`
			// Append a break for better display
			html += `<br>`
		})
		// display all albums in the photos div (AFTER the each method)
		$('#photos').append(html)
	  })
	}) // click
}) // ready