export const canvas = document.getElementById('gameCanvas');
export const ctx = canvas.getContext('2d');

export function setBackground(imageSrc) {
    const background = new Image();
    background.src = imageSrc;

    background.onload = () => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    };
}