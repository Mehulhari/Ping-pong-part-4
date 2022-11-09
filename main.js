nosex=0;
nosey=0;

function parent(){
    <div id="myContainer"></div>
    
     canvas= createCanvas(800 ,400);
}

function createCapture(){
    video = createCapture(VIDEO);
    video.size(600,300);
    video.hide();
}
function image(){
poseNet = ml5.poseNet(video, modelLoaded);
}

function ModelLoaded(){
    console.log="Model is loaded!!!"
}