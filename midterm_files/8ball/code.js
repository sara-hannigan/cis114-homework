'use strict'

/*
Sara Hannigan
sarahannigan@my.smccd.edu
CIS 114 OL
code.js
Midterm
10/13/2020
*/
// Answers array
const answers = [
	"It is certain", 
	"It is decidedly so", 
	"Without a doubt", 
	"Yes - definitely", 
	"You may rely on it", 
	"As I see it, yes", 
	"Most likely", 
	"Outlook good", 
	"Signs point to yes", 
	"Yes", 
	"Reply hazy, try again", 
	"Ask again later", 
	"Better not tell you now", 
	"Cannot predict now", 
	"Concentrate and ask again", 
	"Don't count on it", 
	"My reply is no", 
	"My sources say no", 
	"Outlook not so good", 
	"Very doubtful"]

 function getAnswer() {
	// Dynamically get the length of the array in case it changes
	let size = answers.length;
	// Create random key with the max < size
	let randomKey = Math.floor(Math.random() * size)

	// Display the random answer
	document.getElementById("output").innerHTML = answers[randomKey]

 }
 
 document.getElementById("askBtn").addEventListener("click", getAnswer);
