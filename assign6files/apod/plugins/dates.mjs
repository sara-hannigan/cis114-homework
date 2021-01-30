'use strict'
/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   dates.mjs
   Assignment 6
   11/22/2020
*/

// create the randomDate and today functions for export
export function randomDate() {
    const earliestDate = new Date('1995, 5, 16')
    const earliestDateInMilliseconds = earliestDate.getTime()
    // Want to provide a value between the earliest date and today
    const latestDate = new Date()
    const latestDateInMilliseconds = latestDate.getTime()
    // generate the random date and set it
    let randomDateInMS = Math.random() * (latestDateInMilliseconds - earliestDate) + earliestDateInMilliseconds
    let newDate = new Date(randomDateInMS)
    return getDateString(newDate)
}
// both functions return a string in the format YYYY-MM-DD
export function today () {
    let todayDate = new Date();
    return getDateString(todayDate)
}

function getDateString (date) {
    let dateString = ``
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    dateString = `${year}-${month}-${day}`
    return dateString
}
