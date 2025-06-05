document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const menuButton = document.querySelector('header nav button[aria-label="Open menu"]');
    const mobileMenuNav = document.getElementById('mobile-menu-nav');

    if (menuButton && mobileMenuNav) {
        menuButton.addEventListener('click', function () {
            const isCurrentlyHidden = mobileMenuNav.classList.contains('hidden');
            mobileMenuNav.classList.toggle('hidden', !isCurrentlyHidden);
            // Correctly set aria-expanded based on the NEW state
            menuButton.setAttribute('aria-expanded', String(!isCurrentlyHidden)); 
        });
    }

    // Add any other global site scripts here if needed in the future
    // For example, the dynamic copyright year script:
    const yearSpan = document.getElementById('currentYear'); // Assuming you use id="currentYear" in your footer
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});