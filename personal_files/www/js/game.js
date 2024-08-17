import { ctx, canvas, setBackground } from './canvas.js';
import { player, initPlayer, fireBullet, spaceship } from './player.js';
import { Enemy } from './enemy.js';
import { PowerUp } from './powerup.js';
import { Obstacle } from './obstacle.js';
import { drawThruster, updateThrusterScale } from './thruster.js';
import { shootSound, hitSound, powerUpSound, damageSound, levelUpSound, createAmbientMusic, createMusic, stopAllSounds } from './audio.js';
import { displayIntroStory, displayLevel1Story, displayLevel2Story, displayLevel3Story, displayLevel4Story, displayLevel5Story } from './story.js';

let enemies = [];
let bullets = [];
let powerUps = [];
let obstacles = [];
let score = 0;
let gameOver = false;
let level = 1;
let enemiesDefeated = 0;
let enemiesToNextLevel = 10;
let gameStarted = false;
let inputReceived = false;
let currentLevelData = null;
let totalEnemiesSpawned = 0;
let maxEnemiesToSpawn = 0;
let enemySpawnInterval = 2000;
let lastEnemySpawnTime = 0;

export function initGame() {
    initPlayer();
    resetGameState();
    displayIntroStory(ctx);

    // Load the first level JSON file
    loadLevelData(level).then(() => {
        setTimeout(() => {
            startLevel(level);
        }, 5000);
    });
}

function resetGameState() {
    enemies = [];
    bullets = [];
    powerUps = [];
    obstacles = [];
    score = 0;
    gameOver = false;
    enemiesDefeated = 0;
    totalEnemiesSpawned = 0;
    enemiesToNextLevel = 10;
    gameStarted = false;
    inputReceived = false;
}

async function loadLevelData(level) {
    const response = await fetch(`./levels/level${level}.json`);
    currentLevelData = await response.json();
    console.log(`Loaded level ${level}`, currentLevelData);

    maxEnemiesToSpawn = currentLevelData.enemies.reduce((sum, enemyType) => sum + enemyType.count, 0);
    enemySpawnInterval = 2000 - (level * 100);

    // Set background image
    setBackground(currentLevelData.background);

    // Play music and ambience
    // if (currentLevelData.music) {
    //     stopAllSounds();
    //     window[currentLevelData.music]();
    // }
    // if (currentLevelData.ambience) {
    //     window[currentLevelData.ambience]();
    // }
}

function startLevel(level) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (level === 1) {
        displayLevel1Story(ctx);
    } else if (level === 2) {
        displayLevel2Story(ctx);
    } else if (level === 3) {
        displayLevel3Story(ctx);
    } else if (level === 4) {
        displayLevel4Story(ctx);
    } else if (level === 5) {
        displayLevel5Story(ctx);
    }

    const startGameOnInput = () => {
        if (!inputReceived) {
            inputReceived = true;
            gameStarted = true;
            document.removeEventListener('keydown', startGameOnInput);
            document.removeEventListener('mousedown', startGameOnInput);
            gameLoop();
        }
    };

    document.addEventListener('keydown', startGameOnInput);
    document.addEventListener('mousedown', startGameOnInput);

    setTimeout(() => {
        if (!inputReceived) {
            gameStarted = true;
            gameLoop();
        }
    }, 60000);
}

function spawnEnemy() {
    if (!gameStarted || !currentLevelData) return;

    if (totalEnemiesSpawned >= maxEnemiesToSpawn) return;

    const now = Date.now();
    if (now - lastEnemySpawnTime < enemySpawnInterval) return;

    lastEnemySpawnTime = now;

    currentLevelData.enemies.forEach((enemyType) => {
        if (totalEnemiesSpawned < maxEnemiesToSpawn) {
            const enemy = new Enemy(
                Math.random() * (canvas.width - 30),
                0,
                30,
                30,
                enemyType.speed,
                1 + Math.floor(level / 3)
            );
            enemies.push(enemy);
            totalEnemiesSpawned++;
        }
    });
}

function spawnPowerUp() {
    if (!gameStarted || !currentLevelData) return;

    currentLevelData.powerUps.forEach((powerUpConfig) => {
        if (Math.random() < powerUpConfig.chance) {
            const powerUp = new PowerUp(
                Math.random() * (canvas.width - 25),
                0,
                25,
                25,
                powerUpConfig.type,
                Math.floor(Math.random() * 5) + 1,
                1
            );
            powerUps.push(powerUp);
        }
    });
}

function spawnObstacle() {
    if (!gameStarted || !currentLevelData) return;

    currentLevelData.obstacles.forEach((obstacleConfig) => {
        if (Math.random() < obstacleConfig.frequency) {
            const obstacle = new Obstacle(
                Math.random() * (canvas.width - 50),
                0,
                50,
                20,
                obstacleConfig.speed
            );
            obstacles.push(obstacle);
        }
    });
}

export function update() {
    if (!gameStarted || gameOver) {
        return;
    }

    bullets.forEach((bullet, index) => {
        bullet.update();
        if (bullet.isOffScreen(canvas.height)) {
            bullets.splice(index, 1);
        }
    });

    enemies.forEach((enemy, eIndex) => {
        enemy.update();
        bullets.forEach((bullet, bIndex) => {
            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {
                enemy.health -= bullet.power;
                bullets.splice(bIndex, 1);
                if (enemy.health <= 0) {
                    enemies.splice(eIndex, 1);
                    score += level;
                    enemiesDefeated++;
                    hitSound();
                    if (enemiesDefeated >= enemiesToNextLevel) {
                        level++;
                        enemiesDefeated = 0;
                        enemiesToNextLevel += 5;
                        levelUpSound();
                        gameStarted = false;
                        inputReceived = false;
                        loadLevelData(level).then(() => {
                            setTimeout(() => {
                                startLevel(level);
                            }, 500);
                        });
                    }
                }
            }
        });
    });

    powerUps.forEach((powerUp, index) => {
        powerUp.update();
        if (
            player.x < powerUp.x + powerUp.width &&
            player.x + player.width > powerUp.x &&
            player.y < powerUp.y + powerUp.height &&
            player.y + player.height > powerUp.y
        ) {
            powerUp.apply(player);
            powerUps.splice(index, 1);
            powerUpSound();
        }
    });

    obstacles.forEach((obstacle, index) => {
        obstacle.update();
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y
        ) {
            player.life -= 20;
            obstacles.splice(index, 1);
            damageSound();
            if (player.life <= 0) gameOver = true;
        }
    });

    spawnEnemy();
    spawnPowerUp();
    spawnObstacle();

    if (Math.random() < 0.1) bullets.push(fireBullet());

    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    player.updatePlayerPosition();
    updateThrusterScale();
}

export function draw() {
    if (!gameStarted) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(spaceship, player.x, player.y, player.width, player.height);

    drawThruster(ctx, player.x + 20, player.y + player.height, 10, 30);
    drawThruster(ctx, player.x + player.width - 30, player.y + player.height, 10, 30);

    enemies.forEach(enemy => enemy.draw(ctx));
    bullets.forEach(bullet => bullet.draw(ctx));
    powerUps.forEach(powerUp => powerUp.draw(ctx));
    obstacles.forEach(obstacle => obstacle.draw(ctx));

    ctx.fillStyle = '#fff';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(`Score: ${score}`, 10, 10);
    ctx.fillText(`Level: ${level}`, 10, 40);
    ctx.fillText(`Power: ${player.power}`, 10, 70);

    ctx.fillStyle = '#0f0';
    ctx.fillRect(canvas.width - 110, 10, player.life, 20);
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(canvas.width - 110, 10, 100, 20);

    ctx.fillStyle = '#00f';
    ctx.fillRect(0, canvas.height - 10, (enemiesDefeated / enemiesToNextLevel) * canvas.width, 10);

    if (gameOver) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 40);
        ctx.font = '30px Arial';
        ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2 + 10);
        ctx.fillText(`Level: ${level}`, canvas.width / 2, canvas.height / 2 + 50);
        ctx.font = '20px Arial';
        ctx.fillText('Tap to Restart', canvas.width / 2, canvas.height / 2 + 90);
    }
}

export function gameLoop() {
    update();
    draw();
    if (gameStarted) requestAnimationFrame(gameLoop);
}
