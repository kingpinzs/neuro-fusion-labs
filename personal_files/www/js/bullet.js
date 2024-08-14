export class Bullet {
    constructor(x, y, power) {
        this.x = x;
        this.y = y;
        this.width = 5;
        this.height = 10;
        this.speed = 5;
        this.power = power;
    }

    update() {
        this.y -= this.speed;
    }

    isOffScreen(canvasHeight) {
        return this.y + this.height < 0;
    }

    draw(ctx) {
        ctx.fillStyle = '#ff0';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
