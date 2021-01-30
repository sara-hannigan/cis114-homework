// Sara Hannigan
// sarahannigan@my.smccd.edu
// CIS 114 OL
// form.js
// Lab #14
// 12/4/2020

'use strict'

$(function () {

    // process the form
    $('#myForm').submit(function (event) {

        // assume that the form input is valid
		let isValid = true
		let requiredMsg = 'This field is required.'
		let validEmailMsg = 'Must be a valid email address.'

        const email = $("#email").val().trim()
 
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
		// check if the email is empty and if it is, display the message:
		// "This field is required." in the text property of the span element
		// using $("#email").next().text
        if (email) {
			// validate the email entry with a regular expression
		   if (!email.match(emailPattern)) {
			   	// if the email address is invalid, display the message "Must be a valid email address."
				$("#email").next().text(validEmailMsg)
				// set isValid to false if the email is empty or invalid
				isValid = false
		   } else {
				// if the email is valid, set the text property of the span element to the empty string
				$("#email").next().text('')
		   }
		} else {
			$("#email").next().text(requiredMsg)
			isValid = false
	    } 
			 
        const name = $("#name").val().trim()
		// check if the name is empty, and if it is, display the message
		// "This field is required." in the text property of the span element
		if (name) {
			// if the name is valid, set the text property of the span element to the empty string
			$("#name").next().text('')
		} else {
			$("#name").next().text(requiredMsg)
			// set isValid to false if the name is empty
			isValid = false
		}

        const superhero = $("#superheroAlias").val().trim()
		
		// check if the superhero input is empty, and if it is, display the message
		// "This field is required." in the text property of the span element
		if (superhero) {
			// if the name is valid, set the text property of the span element to the empty string
			$("#superheroAlias").next().text('')
		} else {
			$("#superheroAlias").next().text(requiredMsg)
			// set isValid to false if the name is empty
			isValid = false
		}
				
		// if there is invalid input do not submit the form
        if (!isValid) {
            event.preventDefault()                
        }
    })
})

