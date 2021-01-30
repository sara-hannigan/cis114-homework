'use strict'

/* Sara Hannigan
   sarahannigan@my.smccd.edu
   CIS 114 OL
   memory.js
   Final Assignment
   12/14/2020
*/

// Get all the cards and store them into memory
const cards = document.querySelectorAll('.memory-card')

// This is for the first flip of the card
let hasFlippedCard = false

// Stores cards currently being looked at
let firstCard, secondCard

// Checks if the board is locked (cards are being looked at)
let lockBoard = false

function flipCard () {
    // If the board is locked, return - do not execute

    if (lockBoard) return
    // Add the flip property so the css can operate properly
    this.classList.add('flip');

    // This accommodates edge case where we double-click on the first card
    if (this === firstCard) return

    if (!hasFlippedCard) {
        // First time player has clicked the card
        hasFlippedCard = true
        // Set first card to the card in memory
        firstCard = this
    } else {
        // Player has already clicked a card
        // Reset the hasFlippedCard value
        hasFlippedCard = false
        // Set second card variable to the current card
        secondCard = this
        
        // Check to see if the cards match
        checkForMatch();
    }
}

function checkForMatch() {
    // Check if cards match
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    // If match, disable further clicking. If not, unflip
    isMatch? disableCards() : unflipCards()
}

// Cards were matched, prevents them from being clicked again
function disableCards() {
    // Remove event listener if it matches
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
}

// Unflips the cards
function unflipCards() {
    // Lock the board to prevent further cards from being flipped
    lockBoard = true
    // Set timeout to allow the second card to be viewed
    setTimeout(() => {
        // If not a match, flip card back by removing flip class
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        
        // Reset the basic variables of the board
        resetBoard()
    }, 1500)
}

// Shuffles the order of cards, immediately invoked upon running
(function shuffle() {
    cards.forEach(card => {
        // Provides random integer between 1-12
        let randomPos = Math.floor(Math.random() * 12)
        // Sets each card's position to random, which should shuffle them
        card.style.order = randomPos
    })
}) ()

// Resets variables between card selections
function resetBoard() {
    // Reset the first premise of the board for subsequent clicks
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

// Check for clicks and then call flipCard
cards.forEach (card => card.addEventListener('click', flipCard))
