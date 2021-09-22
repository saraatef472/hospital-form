$("#div4").delay().fadeIn();
$("#cancel").click(function(){
$("#div4").fadeOut()})


var doctors = ["heba", "sara", "nada", "gana", "mariam","ahmed"];
var times = ["1Pm", "2Pm", "3Pm", "4Pm", "5Pm","6Pm","7Pm","8Pm"];
$( "#submit" )
  .click(function() {
    var value = $("#first").val();
    alert("hey "+ value +" "+ "your reservation is with doctor"+"  "+ doctors[Math.floor(Math.random() * doctors.length)] +"  " +" Tomorrow and your date is "+ times[Math.floor(Math.random() * times.length)] );
  });

