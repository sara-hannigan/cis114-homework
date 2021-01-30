"use strict";

// Sara Hannigan
// sarahannigan@my.smccd.edu
// CIS 114 OL
// book_list.js
// Lab 15
// 12/12/2020

function setSrcAttr() {
    $('img').attr('src', '');
}

$(document).ready(function() {
    
    $("#accordion").accordion({
        collapsible: true,
        activate: setSrcAttr()
    })
}); // end ready