function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dbpuZj2D9/model.json', modelReady);
    console.log("Model Ready");
}
function modelReady()
{
    classifier.classify(gotResult);
    console.log("Model ready function completed");
}
f