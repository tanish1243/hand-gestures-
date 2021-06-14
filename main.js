prediction_1="" ;
prediction_2= "";

Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("capturedimage1").innerHTML="<img id='snapshot' src='"+data_uri+"'>";

    })
}
console.log("ml5",ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D-EK5aj58/model.json',modelloaded);
function modelloaded(){
    console.log("model loaded successfully");
    
}
function speak(){
    synth= window.speechSynthesis;
    speakdata1="The first prediction is"+ prediction_1;
    speakdata2="The second prediction is"+ prediction_2;
    utterThis= new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterThis);
}