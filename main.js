function preload() {

}

function setup(){
canvas = createCanvas(300, 300);
canvas.position(300, 300);
video= createCapture(VIDEO);
video.size(300, 300);
video.hide()

tint_color = "";

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300)
    tint(tint_color);
    }
    
    function take_snapshot(){
        save ('myFilterImage.png');
    }