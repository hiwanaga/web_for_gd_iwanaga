function Bat() {
    this.y = height / 2;
    this.x = 50;

    this.gravity = 1;
    this.velocity = 0;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 25, 25);
    }

    this.update = function() {
        //this.velocity += this.gravity;
        //why not this.y < height ????
        // if (this.y > height) {
        //    this.velocity = 0;
        //}
        //this.y += this.velocity;
        this.velocity += this.gravity;
        this.y += this.velocity;

    }
}


var bat;

function setup() {
    createCanvas(300, 400);
    bat = new Bat();
}

function draw() {
    background(0);
    bat.show();
    bat.update();
    console.log(bat.y);

}