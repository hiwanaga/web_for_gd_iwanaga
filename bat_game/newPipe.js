function pipe() {
    this.top = random(height / 2);
    this.bottom = random(height / 2);
    this.x = width;
    this.w = 50;
    this.speed = 5;

    this.show = function() {
        image(imgTopRock, this.x, 0, this.w, this.top);
        image(imgBottomRock, this.x height - this.bottom, this.w.this.bottom);
    }

    this.update = function() {
        this.x -= thhis.speed;
    }
}