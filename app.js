"use strict"

$( document ).ready(function() {
    console.log( "ready!" );
});

var studentArray = ["Naomi", "Dylan", "Josh", "Tory", "Nicole", "Laura", "Denzel", "Mark", "Erin"];

function generateStudent(){
var randomized = studentArray[Math.floor(Math.random() * studentArray.length)];

$("#student").append(randomized);
}