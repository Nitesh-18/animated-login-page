// Ensure JavaScript runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Form submission handling
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            alert("Please fill in both fields.");
        } else {
            alert("Login Successful!");

            // Step 1: Minimize the background image and hide it
            const bgImage = document.querySelector(".bg-image");
            bgImage.style.transform = "scale(0.8)"; // Minimize to center

            // Step 2: Move logo to center and fade out
            const logoContainer = document.querySelector(".logo-container");
            logoContainer.classList.add("logo-center"); // Apply shrinking effect

            // Keep the logo visible for a short duration
            setTimeout(() => {
                logoContainer.style.opacity = "0"; // Fade out logo
                bgImage.style.transition = "transform 0.5s ease"; // Set faster transition for bg image
            }, 1500); // Duration for the logo to stay at center before fading out
        }
    });

    // On window load, activate transitions
    const container = document.querySelector(".container");
    const logoContainer = document.querySelector(".logo-container");
    const formContainer = document.querySelector(".form-container");
    const bgImage = document.querySelector(".bg-image");

    // Step 1: Show the background image and prepare for form display
    setTimeout(() => {
        bgImage.style.transform = "translateX(50%) scale(1)"; // Shift right while keeping full height
        formContainer.style.display = "flex"; // Show the form
    }, 300); // Delay for background image to settle

    // Step 2: Pop the logo to the center
    setTimeout(() => {
        logoContainer.style.opacity = "1"; // Fade in the logo
        logoContainer.style.transform = "scale(1.5)"; // Zoom in the logo
    }, 1300); // Delay for background transition

    // Step 3: Move the logo to the top-left
    setTimeout(() => {
        container.classList.add("active"); // Apply active class for final positioning
    }, 1700); // Timing for final logo position
});
