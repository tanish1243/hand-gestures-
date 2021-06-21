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
    speakdata1="The  prediction is "+ prediction_1;
    
    utterThis= new SpeechSynthesisUtterance(speakdata1 );
    synth.speak(utterThis);
}
function check(){
    img= document.getElementById("snapshot");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);

    }
    else{
        console.log(results);
        document.getElementById("result1").innerHTML= results[0].label;
        
        prediction_1= results[0].label;
        
        speak();
        if(results[0].label== "ok sign"){
            document.getElementById("resultemoji1").innerHTML= "&#128076;";
        }
        if(results[0].label== "hi fi"){
            document.getElementById("resultemoji1").innerHTML= "&#128532;";
        }
        if(results[0].label== "fist"){
            document.getElementById("resultemoji1").innerHTML= "&#128546;";
        }
        
        

    }

}
