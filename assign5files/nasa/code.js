'use strict'

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   code.js
   Assignment 5
   11/08/2020
*/

const apikey = `OtahzRc5QFBsI5AC7pi8nMskMqXQH9S2BnRDIF1X`

// use fetch to get the Astronomy Photo of the Day
// URL is https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY
    const requestURL = `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
    fetch(requestURL)
        .then(response => response.json())
        .then(function(data) {
            console.log(data)
        // use querySelector for an HTML element without an id
        // assign the title and date to the h2 element
        document.querySelector('h2').innerHTML = `${data.title} <br> ${data.date}`

        // assign the hdurl to the img src
        document.querySelector('img').src = data.hdurl

    // assign the explanation to the description	
        document.getElementById('description').innerHTML = data.explanation

            })
    // place this at the end of the fetch
        .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
