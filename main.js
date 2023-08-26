function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 640,480);
    circle(30, 30, 20);
    circle(30, 30, 20);
    circle(30, 30, 20);
    ellipse(36, 46, 45, 55);
    ellipse(36, 46, 45, 55);
    rect(30, 20, 55, 55, 20, 15, 10, 5);
}

function take_snapshot(){
    save('your_pic.png');
}