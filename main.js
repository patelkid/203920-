img="";
img2="";
img3="";
img4="";
img5="";
objects=[];

function preload() {
    img=loadImage("ac.jpeg");
    img2=loadImage("bedroom.jpeg");
    img3=loadImage("fan.jpeg");
    img4=loadImage("kitchen.jpeg");
    img5=loadImage("tv.jpeg");

}

function setup(){
    canvas = createCanvas(650,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
 
    if(status !="")
    {
       for(i=0;i <objects.length; i++)
       {
          document.getElementById("status").innerHTML= "Status : Object Detected";
 
          fill("#412d61");
          percent = floor(objects[i].confidence*100);
          text(objects[i].label+""+percent+"%",objects[i].x+15, objects[i].y+15);
          noFill();
          stroke("#FF0000")
          rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
 
       }
    }
    
 }

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);

    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img2, gotResult);

    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img3, gotResult);

    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img4, gotResult);

    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img5, gotResult);
 }
 
 
 function gotResult(error, results) {
    if(error){
        console.lof(error);
    }
    console.log(results);
    objects=results;
 }
 