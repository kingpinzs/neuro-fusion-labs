import { Bullet } from './bullet.js';
import { canvas } from './canvas.js';

export const spaceship = new Image();
spaceship.src = 'images/testship.webp';

export let player;

export function initPlayer() {
    player = {
        x: canvas.width / 2 - 50,
        y: canvas.height - 150,
        width: 100,
        height: 150,
        life: 100,
        power: 1
    };
    player.autoMove = function() {
        // Code for auto-moving the player
    };
    player.autoShoot = function() {
        // Code for auto-shooting bullets
    };
     // Initialize movement controls
     initMovementControls();
}

// Event listener for player movement (side to side)
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    player.x = event.clientX - rect.left - player.width / 2;
});

canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    player.x = touch.clientX - rect.left - player.width / 2;
});

export function fireBullet() {
    return new Bullet(player.x + player.width / 2 - 2.5, player.y, player.power);
}

// Movement controls using arrow keys and device tilt
function initMovementControls() {
    const keys = {
        left: false,
        right: false,
        up: false,
        down: false
    };

    // Attach the keydown and keyup events to the window object
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                keys.left = true;
                break;
            case 'ArrowRight':
                keys.right = true;
                break;
            case 'ArrowUp':
                keys.up = true;
                break;
            case 'ArrowDown':
                keys.down = true;
                break;
        }
    });

    window.addEventListener('keyup', (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                keys.left = false;
                break;
            case 'ArrowRight':
                keys.right = false;
                break;
            case 'ArrowUp':
                keys.up = false;
                break;
            case 'ArrowDown':
                keys.down = false;
                break;
        }
    });

    window.addEventListener('deviceorientation', (event) => {
        const tiltLR = event.gamma; // Left to right tilt
        const tiltFB = event.beta;  // Front to back tilt

        if (tiltLR !== null) {
            player.x += tiltLR / 10; // Adjust sensitivity as needed
        }
        if (tiltFB !== null) {
            player.y += tiltFB / 10; // Adjust sensitivity as needed
        }

        // Keep the player within the canvas bounds
        player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
    });

    // Update player position based on arrow key inputs
    function updatePlayerPosition() {
        if (keys.left) {
            player.x -= 5; // Move left
        }
        if (keys.right) {
            player.x += 5; // Move right
        }
        if (keys.up) {
            player.y -= 5; // Move up
        }
        if (keys.down) {
            player.y += 5; // Move down
        }

        // Keep the player within the canvas bounds
        player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
        player.y = Math.max(0, Math.min(canvas.height - player.height, player.y));
    }

    // Call this function in your game loop
    player.updatePlayerPosition = updatePlayerPosition;
}
