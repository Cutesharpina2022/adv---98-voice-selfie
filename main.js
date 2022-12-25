var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 

recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "Take my selfie")
    {
console.log("taking your selfie in 5 seconds!")
    speak();}
      
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
  setTimeout(function() 
  { 
take_snapshot();
save();
  } ,5000);
}

Webcam.set({
  width:360,
  height:240,
  image_format:'png',
  png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
  webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="selfie" src=" '+data_uri+'">';
  });
}

function save(){
  link=document.getElementById("link");
  img = document.getElementById("selfie").src;
  link.href=image;
  link.click();
}