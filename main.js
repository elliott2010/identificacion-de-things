Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
})
camera=document.getElementById("camera");

Webcam.attach("#camera")

function snap(){
    Webcam.snap(function(data_uri){
        document.getElementById ("result").innerHTML='<img id="selfie" src="'+data_uri+'"/>'
    })
    }
console.log('ml5version:',ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UEvgB_QU0/model.json",modelo_cargado)
function  modelo_cargado (){
    console.log ("modelo_cargado")
}
function check(){
    img=document.getElementById("selfie")
    classifier.classify(img,gotResults)
}
function gotResults (error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("trust").innerHTML=results[0].confidence
}
}