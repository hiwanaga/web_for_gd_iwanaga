// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/aKiyCeIuwn4


var img;

function preload() {
    imgBat = loadImage('image/bat.gif');
    imgTopRock = loadImage('image/obsticle-top.png');
    imgBottomRock = loadImage('image/obsticle.png');
    imgBG = loadImage('image/cover.png');
}


var bird;
var pipes = [];
var mic;
var sliderTop;
var sliderBottom;
var clapping = false;



function setup() {
    bg = loadImage('image/cover.png');
    createCanvas(windowWidth, windowHeight);
    // Create an Audio input
    mic = new p5.AudioIn();
    // start the Audio Input.
    // By default, it does not .connect() (to the computer speakers)
    mic.start();
    bird = new Bird();

    pipes.push(new Pipe());
    sliderTop = createSlider(0, 1, 0.3, 0.01);
    sliderBottom = createSlider(0, 1, 0.1, 0.01);
}

function draw() {
    background(bg);
    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel();
    console.log(vol)
        //var vol = mic.getLevel();


    for (var i = pipes.length - 1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            console.log("HIT");
        }


        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        }


    }

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

    var thresholdTop = sliderTop.value();

    var thresholdBottom = sliderBottom.value();

    if (vol > thresholdTop && !clapping) {
        bird.up();
        clapping = true;
    }

    if (vol < thresholdBottom) {
        clapping = false;
    }

    // fill(0, 255, 0);
    //console.log(vol);
    // noStroke();
    // var y = map(vol, 0, 1, height, 0);
    //rect(width - 50, y, 50, height - y);

    //var ty = map(thresholdTop, 0, 1, height, 0);
    //stroke(255, 0, 0);
    //strokeWeight(4);
    // line(width - 50, ty, width, ty);

    // var by = map(thresholdBottom, 0, 1, height, 0);
    //stroke(0, 0, 255);
    //strokeWeight(4);
    //line(width - 50, by, width, by);


}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        //console.log("SPACE");
    }
}