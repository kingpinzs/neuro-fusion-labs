import { canvas, ctx } from './canvas.js';
import { initGame, gameLoop } from './game.js';
import { spaceship } from './player.js';

spaceship.onload = function () {
    initGame();
    gameLoop();
};
