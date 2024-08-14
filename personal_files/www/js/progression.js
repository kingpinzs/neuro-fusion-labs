export function calculateXP(player, enemiesDefeated) {
    return enemiesDefeated * 10; // Example XP calculation
}

export function levelUp(player) {
    player.level += 1;
    player.life += 10; // Reward for leveling up
}
