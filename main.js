function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classify = ml5.imageClassifier("MobileNet",modelLoaded);
}

function modelLoaded(){
  console.log("Mobile Net is loaded");
}

function draw(){
  image(video,0,0,250,250);
  classify.classify(video, got_result)
}

function got_result(error,results){
  if (error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}



