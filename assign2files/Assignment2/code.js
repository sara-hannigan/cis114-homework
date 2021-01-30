"use strict"

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   code.js
   Assignment 2
   9/20/2020
*/

    // Employee class
    class Employee {
        constructor(firstName, lastName, position) {
            this.firstName = firstName
            this.lastName = lastName
            this.position = position
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`
        }
        fileNameConvert = (fullName) => {
            let lowerCase = fullName.toLowerCase()
            let fileName = lowerCase.replace(' ', '_')
            return fileName
        }
    }
	
	// array of Employee objects
    let employeeArray = [
        new Employee('Pamela', 'Beesly', 'Receptionist'),
        new Employee('Kelly', 'Kapoor', 'Customer Service Rep.'),
        new Employee('Michael', 'Scott', 'Regional Manager'),
        new Employee('Jim', 'Halpert', 'Assistant Regional Manager'),
        new Employee('Oscar', 'Martinez', 'Accountant')
    ]
    let html = "";
	
	// for of loop
    for (let employee of employeeArray) {
        let fullName = employee.fullName
        let fileName = employee.fileNameConvert(fullName)
        let imageFile = 'images/' + fileName + '.jpg'
        html += "<div class='special'>"
        html += "<span><img src='" + imageFile + "'</img></span>"	
        html += "<h2>" + fullName + "</h2>"	
        html += "<p>" + employee.position + "</p>"
        html += "</div>"
    }
    // end of loop
	
    // display the html string on the web page
    document.getElementById('list').innerHTML = html
