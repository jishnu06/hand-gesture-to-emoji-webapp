prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version', ml5.version);
classifer = ml5.imageClassifer("https://teachablemachine.withgoogle.com/models/EoyyOoVtz/model.json", modelLoaded);

function modelLoaded(){
    console.log("model loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is"+prediction1;
    speak_data2 = "And the second prediction is"+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}