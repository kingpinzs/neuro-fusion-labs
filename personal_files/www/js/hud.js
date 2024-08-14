export function drawHUD(ctx, score, level, player) {
    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(`Score: ${score}`, 10, 10);
    ctx.fillText(`Level: ${level}`, 10, 40);
    ctx.fillText(`Power: ${player.power}`, 10, 70);

    ctx.fillStyle = '#0f0';
    ctx.fillRect(ctx.canvas.width - 110, 10, player.life, 20);
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(ctx.canvas.width - 110, 10, 100, 20);
}