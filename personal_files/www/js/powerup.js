export class PowerUp {
    constructor(x, y, width, height, operation, value, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.operation = operation;
        this.value = value;
        this.speed = speed;
    }

    apply(player) {
        switch (this.operation) {
            case 'x2':
                player.power *= 2;
                break;
            case '/2':
                player.power = Math.max(1, Math.ceil(player.power / 2));
                break;
            // Add other operations...
        }
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = '#000';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.operation, this.x + this.width / 2, this.y + this.height / 2);
    }
}