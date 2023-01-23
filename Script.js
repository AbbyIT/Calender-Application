
  let $currentTextarea = $("textarea[data-time='09am']")

    console.log ($currentTextarea)

// display current time on the screen

// time updates every  second

setInterval(
function(){
    $("#currentDay").text(moment().format ("DDD MMM YYYY hh:mm:ss"));
},1000);


// Creat a button click function


  $("button").on("click", function(event){

  
    localStorage.setItem(event.target.innerText, JSON.stringify(event.target.previousElementSibling.value))
    console.log(event.target.innerText)

      // compare to current time is 9am before of after the current moment
      

    //   if(moment().format("h") > $currentTextarea.attr("data-time")){
          
    //       console.log("hello");
     
    //     }
        

 })

//  this retrieves appts from local storage to populates the time blocks
function GetAppointment(){

// localStorage.getItem ("11aam")

console.log(JSON.parse(localStorage.getItem("11am")))

}

GetAppointment()

// if it then we want to apply task to it. if current time is 12pm and we are on the 12pm textarea. 