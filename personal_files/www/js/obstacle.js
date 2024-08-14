export class Obstacle {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = '#888';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}