export function displayIntroStory(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Intro Story
    ctx.fillText("In a distant galaxy, far beyond the stars we know,", ctx.canvas.width / 2, ctx.canvas.height / 2 - 60);
    ctx.fillText("a mysterious force threatens the balance of the universe.", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("You, a courageous pilot with a sharp mind and quick reflexes,", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("have been chosen to defend the galaxy from chaos.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("Your journey begins on a humble planet,", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
    ctx.fillText("where hidden resources lie beneath the surface.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 90);
    ctx.fillText("Use your skills in logic and memory to uncover them,", ctx.canvas.width / 2, ctx.canvas.height / 2 + 120);
    ctx.fillText("and upgrade your ship for the battles ahead.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 150);
    ctx.fillText("The enemies you'll face grow more unpredictable,", ctx.canvas.width / 2, ctx.canvas.height / 2 + 180);
    ctx.fillText("but with every challenge, your mind sharpens.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 210);
    ctx.fillText("Only by mastering the patterns and puzzles of the galaxy", ctx.canvas.width / 2, ctx.canvas.height / 2 + 240);
    ctx.fillText("can you restore order and find the peace you seek.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 270);
    ctx.fillText("Prepare yourself, brave pilot... the stars await.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 300);
}

export function displayLevel1Story(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Level 1: The Forgotten Outpost", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("You arrive at a long-abandoned mining outpost.", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("The old machinery still hums with potential.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("Your task: Reactivate the core systems and collect resources.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
    ctx.fillText("But beware, something lurks in the shadows...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 90);
}

export function displayLevel2Story(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Level 2: The Nebula Maze", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("A thick, swirling nebula blocks your path.", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("Its colorful gases make navigation difficult.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("Use your memory to track the safe path through.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
    ctx.fillText("But stay sharp, the nebula hides unexpected dangers...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 90);
}

export function displayLevel3Story(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Level 3: The Ancient Ruins", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("You discover a planet dotted with ancient ruins.", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("These ruins hold advanced technology from a forgotten race.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("Solve the logic puzzles left behind to unlock powerful upgrades.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
    ctx.fillText("But beware, the ruins are guarded by mysterious entities...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 90);
}

export function displayLevel4Story(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Level 4: The Crystal Caverns", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("Deep beneath the surface of a barren moon,", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("you find a cavern filled with shimmering crystals.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("These crystals are a powerful energy source.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
    ctx.fillText("But the caverns are unstable, and time is running out.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 90);
    ctx.fillText("Collect the crystals before the caverns collapse...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 120);
}

export function displayLevel5Story(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Level 5: The Final Confrontation", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("You reach the heart of the galaxy,", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("where the source of the chaos lies.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("A massive, sentient anomaly challenges you.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
    ctx.fillText("Use everything you've learned to outsmart it.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 90);
    ctx.fillText("The fate of the galaxy rests in your hands...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 120);
    ctx.fillText("But beware, nothing is as it seems...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 150);
}

// Surprise Elements (Triggered at specific points)

export function displaySurprise1(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Surprise!", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("A hidden ally reveals themselves, offering you a powerful upgrade.", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("But they also warn of an impending threat...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
}

export function displaySurprise2(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Surprise!", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("You discover a hidden cache of resources!", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("These will significantly boost your ship's capabilities.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("But the cache is guarded by a formidable foe...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
}

export function displaySurprise3(ctx) {
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText("Surprise!", ctx.canvas.width / 2, ctx.canvas.height / 2 - 30);
    ctx.fillText("An ancient AI awakens, offering to assist you.", ctx.canvas.width / 2, ctx.canvas.height / 2);
    ctx.fillText("But first, you must pass its logic tests.", ctx.canvas.width / 2, ctx.canvas.height / 2 + 30);
    ctx.fillText("Fail, and it may turn against you...", ctx.canvas.width / 2, ctx.canvas.height / 2 + 60);
}
