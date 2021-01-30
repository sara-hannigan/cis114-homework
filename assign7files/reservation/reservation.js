"use strict"

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   reservation.js
   Assignment 7
   12/05/2020
*/

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/
	const requiredMsg = 'This field is required.'
	const validEmailMsg = 'Must be a valid email address.'
	const numberRequired = 'Must be numeric.'
	const phoneRequired = 'Must be a valid phone number.'
	const phonePattern = /\d{3}-\d{3}-\d{4}/
	const numberPattern = /\d/
		
	// move the focus to the first text box
	$("#arrival_date").focus()
	
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit( evt => {
		
		let isValid = true
		const arrivalDate = $("#arrival_date").val().trim()
		const numberOfNights = $("#nights").val().trim()
		const name = $("#name").val().trim()
		const email = $("#email").val().trim()
		const phone = $("#phone").val().trim()
		// Validate the arrival date, number of nights, name, email and phone number
		
		// A value must be entered into each text box. 
		// Display "This field is required." in the span element if a value is missing.
		// Use $(selector).next().text to display the error messages in the span element.
		// NOTE that you must substitute the actual id of the input HTML element

		// Validate the arrivalDate field -- first, confirm if it's there
		if (arrivalDate) {
			// Successful, add empty text
			$("#arrival_date").next().text('')
		} else {
			// Field is required, show message and prevent from submitting
			$("#arrival_date").next().text(requiredMsg)
			isValid = false
		}

		if (numberOfNights) {
			// The number of nights must be numeric.
			if (!numberOfNights.match(numberPattern)) {
				// Display "Must be numeric." in the span element if the nights is not numeric.
				$("#nights").next().text(numberRequired)
			} else {
				// Successful, add empty text
				$("#nights").next().text('')
			}
		} else {
			// Field is required, show message and prevent from submitting
			$("#nights").next().text(requiredMsg)
			isValid = false
	    }

		// Validate the name field -- first, confirm if it's there
		if (name) {
			// Successful, add empty text
			$("#name").next().text('')
		} else {
			// Field is required, show message and prevent from submitting
			$("#name").next().text(requiredMsg)
			isValid = false
	    }

		// The email address must match the pattern provided.
		// Display "Must be a valid email address." in the span element if the email is incorrect.
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
		// Create a regular expression for the phone number in the format XXX-XXX-XXXX where X is a digit.  
		// Display "Must be a valid phone number." in the span element if the phone number is incorrect.
		// Be sure to set the span element to the empty string if the input is valid.
		if (phone) {
			// Must be a valid phone number
			if (!phone.match(phonePattern)) {
				// Display "Must be a valid phone number." in the span element if the phone number isn't valid.
				$("#phone").next().text(phoneRequired)
			} else {
				// Successful, add empty text
				$("#phone").next().text('')
			}
		} else {
			// Field is required, show message and prevent from submitting
			$("#phone").next().text(requiredMsg)
			isValid = false
	    }
		
		// if there is invalid input do not submit the form
		if (!isValid) {
            evt.preventDefault()                
        }
		
	})	// end submit
}) // end ready