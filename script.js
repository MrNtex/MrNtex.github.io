document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to Artur Niemiec Industries!");
});

let threshHold = -5;
document.addEventListener('DOMContentLoaded', function() {
    const projectContainers = document.querySelectorAll('.ProjectContainer');

    function animateOnScroll() {
        const windowHeight = window.innerHeight;
        
        projectContainers.forEach(container => {
            const containerTop = container.getBoundingClientRect().top;
            const containerVisible = (containerTop - windowHeight) < -windowHeight/4;

            if (containerVisible) {
                container.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger on initial load in case elements are already in view
});


function equalizeContainerHeights() {
    const containers = document.querySelectorAll('.ProjectContainer');
    let maxHeight = 0;

    // First, find the tallest container
    containers.forEach(container => {
        const height = container.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Then, set all containers to that height
    containers.forEach(container => {
        container.style.height = `${maxHeight}px`;
    });
}

// Run the function on page load and on window resize
window.onload = equalizeContainerHeights;
window.onresize = equalizeContainerHeights;
