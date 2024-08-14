export class Enemy {
    constructor(x, y, width, height, speed, health) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.health = health;
        this.chaosFactor = 0; // Increase over time for chaotic behavior
    }

    update() {
        this.x += Math.sin(this.chaosFactor) * 2; // Example of chaotic movement
        this.y += this.speed;
        this.chaosFactor += 0.01; // Increase chaos over time
    }

    draw(ctx) {
        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height / 2);
        ctx.lineTo(this.x + this.width / 2, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height / 2);
        ctx.closePath();
        ctx.fill();
    }
}