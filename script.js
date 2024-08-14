document.addEventListener('DOMContentLoaded', () => {
    const hiddenLink = document.querySelector('.hidden-link');
    const secretContent = document.getElementById('secret-rd');
    const pieSymbol = document.getElementById('pie-symbol');

    hiddenLink.addEventListener('mouseover', () => {
        secretContent.style.display = 'block';
    });

    hiddenLink.addEventListener('mouseout', () => {
        secretContent.style.display = 'none';
    });

    let clickCount = 0;
    let holdTimer;

    pieSymbol.addEventListener('click', function(event) {
        // Check if Ctrl key is pressed
        if (event.ctrlKey) {
            if (event.shiftKey) {
                // Trigger crazy screen effects
                document.body.style.animation = 'crazyScreenEffect 0.1s infinite';

                // Stop the effect after 1 second and redirect to personal_files/index.html
                setTimeout(() => {
                    document.body.style.animation = ''; // Clear the animation
                    window.location.href = 'personal_files/www/index.html';
                }, 1000);
            } else {
                // Trigger melting and warping screen effects
                document.body.style.animation = 'meltingWarpingEffect 3s forwards';

                // Clear the animation after it ends
                setTimeout(() => {
                    document.body.style.animation = ''; // Clear the animation
                }, 3000);
            }
        } else {
            // Handle the three-click and long-hold functionality
            clickCount++;

            if (clickCount === 3) {
                // Prepare for long hold detection
                holdTimer = setTimeout(() => {
                    // Navigate to the desired page after long hold
                    window.location.href = 'personal_files/www/index.html';
                }, 1000); // Long hold time (1000ms = 1 second)

                // Reset click count after long hold is detected
                clickCount = 0;
            } else {
                // If not the third click, reset the long hold timer just in case
                clearTimeout(holdTimer);
            }

            // Reset click count if no further click is detected within 1.5 seconds
            setTimeout(() => {
                if (clickCount < 3) {
                    clickCount = 0;
                }
            }, 1500);
        }
    });

    pieSymbol.addEventListener('mouseup', function () {
        // Clear the timer if mouse is released before long hold is detected
        clearTimeout(holdTimer);
    });

    pieSymbol.addEventListener('touchend', function () {
        // Clear the timer if touch is released before long hold is detected
        clearTimeout(holdTimer);
    });
});