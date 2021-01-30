'use strict'

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   apod.js
   Assignment 6
   11/22/2020
*/

import {randomDate, today} from './plugins/dates.mjs'

document.addEventListener('DOMContentLoaded', () => {

  for (const button of document.getElementsByTagName('button')) 
    button.addEventListener('click', () => {
      const action = button.textContent.toLowerCase()
      import(`./plugins/dates.mjs`)
        .then(module => {
         // check the action variable to see which button was pressed
         // this will be the button caption (Today or Random Day) in lowercase
        // call the corresponding module function to get the date string
        let dateString = ''
        if (action === 'today') {
          dateString = today()
        } else if (action === 'random day') {
          dateString = randomDate()
        }
		     // call fetch with the URL containing the API key and the date string
		     // assign the returned data to the HTML elements (use url instead of hdurl)
      
         const apikey = `OtahzRc5QFBsI5AC7pi8nMskMqXQH9S2BnRDIF1X`

         // use fetch to get the Astronomy Photo of the Day
         // URL is https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY
             const requestURL = `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${dateString}`
             fetch(requestURL)
                 .then(response => response.json())
                 .then(function(data) {
                     console.log(data)
                 // use querySelector for an HTML element without an id
                 // assign the title and date to the h2 element
                 document.querySelector('h2').innerHTML = `${data.title} <br> ${data.date}`
         
		            // assign the returned data to the HTML elements (use url instead of hdurl)
                document.querySelector('img').src = data.url
         
                // assign the explanation to the description	
                document.getElementById('description').innerHTML = data.explanation
                 })
             // place this at the end of the fetch
                 .catch(err => {
                 console.log(`error ${err}`)
                 alert("sorry, there are no results for your search")
             })
         
        }) // then module
  }) // button event listener
}) // DOM event listener

