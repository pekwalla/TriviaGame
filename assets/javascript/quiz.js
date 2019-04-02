
   { ///set the timers
    //create the HTML radio buttons and questions

    //set the timer interval 
      //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var number = 16;
    var intervalId;
   //show and hide forms
    $("#form1").hide();
    $("#endQuiz").hide();
     //  The decrement function.
     //  Decrease number by one.
    function decrement() {
      number--;
      //  Show the number in the #show-number tag.
      $("#showTime").html("<h2>" + number + "</h2>");
        console.log(number);
      //  Once number hits zero...
      if (number === -1) {
        //  ...run the stop function.
        
        $("#form1").hide();
        $("#showTime").hide();
        $("#startQuiz").hide();
        $("#endQuiz").show();
        //  Alert the user that time is up.
        alert("Time Up!");
        
      } 
        
    } //end decrement
    function stopDecrement() {
      number=number;
      $("#showTime").html("<h2>" + number + "</h2>");
    }

    function startTimer() {
      $("#startQuiz").hide();
      $("#form1").show();
      $("#showTime").show();
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
  }
     
    function startQuiz() {
      $("#startQuiz").on("click", startTimer);
      

    }

    $("#endQuiz").on("click", function(event) {
      alert("Do you want to try again?")
      //event.preventDefault();
      number= 15;
      $("#showTime").html("<h2>" + number + "</h2>");
      $("#startQuiz").show();
      $("#endQuiz").hide();
      $("#grade").empty();
      $("#grade2").empty();
            
    })


    document.getElementById("form1").onsubmit=function() {
     //var a = $("<div>");
    //a.addClass("grade");
 
    clearInterval(intervalId);
    $("#form1").hide();
    $("#endQuiz").show();


    question1 = parseInt(document.querySelector('input[name = "variable"]:checked').value);
    question2 = parseInt(document.querySelector('input[name = "sub"]:checked').value);
    question3 = parseInt(document.querySelector('input[name = "con"]:checked').value);
    question4 = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
    
    result = question1 + question2 + question3 + question4;
    console.log(result);
    
   // document.getElementById("grade").innerHTML = result;
    $("#grade").append('Correct Answers:' +" = "+ result);
    
    if (result == 0) {result2 = " 4. I don't think you studied. Try again"};
    if (result == 1) {result2 = " 3. You need to study more. Try again"};
    if (result == 2) {result2 = " 2. Try again."};
    if (result == 3) {result2 = " 1. So close."};
    if (result == 4) {result2 = " 0. Well done!"};
    
    $("#grade2").append('Incorrect Answers' + " = "+ result2);
    
    //document.getElementById("grade2").innerHTML = result2;
    return false;
  } 
//this ends the submit function}
//endstartQuiz
startQuiz();
}