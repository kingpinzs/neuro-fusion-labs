export class Missile {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.width = 5;
        this.height = 15;
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = '#f0f';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    isTapped(tapX, tapY) {
        return tapX >= this.x && tapX <= this.x + this.width &&
               tapY >= this.y && tapY <= this.y + this.height;
    }
}
