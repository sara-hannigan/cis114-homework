'use strict'
 
// Instantiating each object
let girlShrug = {
    'name': 'Shrugging girl',
    'age': 22,
    'emoji': "🤷‍♀"
}
let smirkCat = {
    'name': 'Mr. Smirk',
    'age': 10,
    'emoji': "😼"
}
let cactus = {
    'name': 'Sir Cact-a-lot',
    'age': 2,
    'emoji': "🌵"
}
let thumbsUp = {
    'name': 'Thumbs Up Hat',
    'age': 54,
    'emoji': "👍"
}
let bats = {
    'name': 'Austin Bats',
    'age': 6,
    'emoji': "🦇"
}

// Instantiate the array of these objects
let characterArray = [girlShrug, smirkCat, cactus, thumbsUp, bats]

// Instantiate the template literal, the string "list", and the character
let charList = '';
let characterLiteral = '';
var character;

for (character of characterArray) {
    let name = character['name']
    let emoji = character['emoji']
    let age = character['age']
    characterLiteral = name + ` ` + emoji + ` ` + `Age: ` + age
    console.log(characterLiteral)
    charList += characterLiteral + "<br>"
}

console.log(charList)
document.getElementById('output').innerHTML = charList
