export function adjustDifficulty(player, score) {
    if (player.life < 30) {
        // Decrease difficulty if player is struggling
    } else if (score > 100) {
        // Increase difficulty for high-performing players
    }
}