export let thrusterScale = 1;
export let scaleDirection = 0.1;

export function updateThrusterScale() {
    thrusterScale += scaleDirection;
    if (thrusterScale > 1.5 || thrusterScale < 1) {
        scaleDirection *= -1;
    }
}

export function drawThruster(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(1, thrusterScale);
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 0, 255, 0.7)');
    gradient.addColorStop(0.5, 'rgba(255, 255, 0, 0.7)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(-width / 2, 0, width, height);
    ctx.restore();
}
