"use strict";

// Sara Hannigan
// sarahannigan@my.smccd.edu
// CIS 114 OL
// book_list.js
// Lab 13
// 11/29/2020

$(document).ready(function() {
	
    $("#categories h2").click( evt => {
        const h2 = evt.currentTarget;
		// add or remove the minus class to/from the h2 element
        $(h2).toggleClass("minus");
		
        if ($(h2).attr("class") !== "minus") {
		// hide the book list if the class is not "minus" by calling the hide method on  $(h2).next()
           $(h2).next().hide();
        }
        else {
		// show the book list if the class of the h2 element is "minus"
		// call the show method on $(h2).next()
            $(h2).next().show();
        }
		// clear any image displayed in the image element by setting the src attribute to the empty string
        $('img').attr('src', '');
    }); // end click

	// for each book link assign the corresponding book image file
    $("#web_images a, #language_images a").each( (index, img) => {
        // get old and new urls
		
		// create a variable named imageURL and assign the href attribute of the img element to it
        let imageURL = $('img').attr('href');

        // preload images		
        let bookImage = new Image();
        bookImage.src = imageURL;

        // set up event handlers			
        $(img).click( evt => {
		// assign the imageURL to the src attribute of the element with the id 'image'
            $('.image').attr('src', imageURL);
        // cancel the default action of each link
        evt.preventDefault();
        }); // end click 
    }); // end each
}); // end ready