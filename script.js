document.addEventListener('DOMContentLoaded', () => {
    const hiddenLink = document.querySelector('.hidden-link');
    const secretContent = document.getElementById('secret-rd');

    hiddenLink.addEventListener('mouseover', () => {
        secretContent.style.display = 'block';
    });

    hiddenLink.addEventListener('mouseout', () => {
        secretContent.style.display = 'none';
    });
});


document.getElementById('pie-symbol').addEventListener('click', function(event) {
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
                    
            // Redirect to personal_files/index.html after 2 seconds
            setTimeout(() => {
                document.body.style.animation = ''; // Clear the animation
            }, 3000);
        }
    } else {
        // Trigger crazy screen effects
        document.body.classList.add('falling-apart');
                    
        // Stop the effect after 1 second and redirect to personal_files/index.html
        setTimeout(() => {
            
            
        }, 3000);
    }
});