const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
let backgroundMusic;
export let activeSounds = [];

// Function to create ambient background sound
export function createAmbientSound() {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine'; // You can experiment with 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.frequency.value = 110; // Low frequency for a deep, ambient hum

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = 0.05; // Very low volume for a subtle background sound
    oscillator.start();
    oscillator.loop = true;

    backgroundMusic = oscillator;

    activeSounds.push({ oscillator: backgroundMusic, gainNode });
}

// Function to create a pulsing space-like tone
export function createPulsingTone() {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.value = 220; // Middle frequency for a noticeable tone

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = 0.2;

    // Create a pulsing effect by modulating the gain
    const pulseInterval = setInterval(() => {
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
    }, 1000);

    oscillator.start();

    // Stop after some time if you want
    setTimeout(() => {
        clearInterval(pulseInterval);
        oscillator.stop();
    }, 10000); // 10 seconds duration

    activeSounds.push({ oscillator, gainNode });
}

// Function to create a spacey "whoosh" effect (e.g., when an object moves quickly)// Function to create a spacey "whoosh" effect
export function createWhooshSound() {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1);
    activeSounds.push({ oscillator, gainNode });
}

// Function to randomly trigger Whoosh and Pulsing Tone sounds
function triggerRandomSounds() {
    const randomInterval = Math.random() * 5000 + 5000; // Random interval between 5 and 10 seconds

    setTimeout(() => {
        if (Math.random() > 0.5) {
            createWhooshSound();
        } else {
            createPulsingTone();
        }
        triggerRandomSounds(); // Re-trigger after the sound is played
    }, randomInterval);
}

// Example of how to create background ambient music
export function createAmbientMusic() {
    createAmbientSound(); // Start ambient background sound
    setInterval(createPulsingTone, 10000); // Add pulsing tones every 10 seconds
    triggerRandomSounds(); // Trigger random sounds every 5 seconds
}

function createSound(freq, duration) {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.frequency.value = freq;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    oscillator.stop(audioCtx.currentTime + duration);
    activeSounds.push({ oscillator, gainNode });
}

export const shootSound = () => createSound(800, 0.1);
export const hitSound = () => createSound(300, 0.1);
export const powerUpSound = () => createSound(600, 0.2);
export const damageSound = () => createSound(200, 0.3);
export const levelUpSound = () => createSound(1000, 0.5);

export function stopAllSounds() {
    activeSounds.forEach(sound => {
        sound.oscillator.stop();
        sound.gainNode.disconnect();
    });
    activeSounds = []; // Clear the active sounds array
}