leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);


    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotresult);
    
}
function modelLoaded(){
    console.log("right it is correct right");
}
function draw(){
    background('#969A97');
    textSize(difference);
    text("Akshay Singh",60,160);
    
}
function gotresult(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(rightWristX-leftWristX);
    }
}

