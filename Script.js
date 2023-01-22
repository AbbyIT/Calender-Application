// display current time on the screen

let today= moment();

$("#currentDay").text(today.format ("dddd D MMM YYYY"));

// Creat a button click function


$("button").on("click", function(event){


})

// compare to current time is 9am before of after the current moment
// if it then we want to apply task to it. if current time is 12pm and we are on the 12pm textarea. 