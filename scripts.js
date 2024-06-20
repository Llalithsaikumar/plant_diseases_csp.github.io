document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };

    // Open external links in new tab
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
// Add any JavaScript functionality here

// Example: Alert message for Explore button
document.addEventListener('DOMContentLoaded', function() {
    const exploreButton = document.querySelector('.btn');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            window.location.href = "daily-reports.html";
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const dateButtons = document.querySelectorAll('.date-button');

    dateButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of anchor tag
            const link = this.getAttribute('href');
            window.location.href = link; // Redirect to the selected daily report
        });
    });
});
