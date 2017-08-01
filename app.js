"use strict"

$(document).ready(function() {

});

var studentArray = ["Naomi ", "Dylan ", "Josh ", "Tori ", "Nicole ", "Laura ", "Denzel ", "Mark ", "Erin "];

function generateStudent() {
    var randomized = studentArray[Math.floor(Math.random() * studentArray.length)];

    $("#student").append(randomized);
}