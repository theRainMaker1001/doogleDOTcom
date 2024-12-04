// script to toggle between light and dark mode themes


// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the theme toggle checkbox
    const themeToggle = document.getElementById('themeToggle');
    
    // Check the current theme from the HTML dataTheme attribute
    if (document.documentElement.getAttribute('dataTheme') === 'dark') {
        themeToggle.checked = true; // Set the checkbox to checked if dark mode is active
    }
    
    // Add an event listener to the theme toggle checkbox
    themeToggle.addEventListener('change', function() {
        // Check the toggle state (checked or not)
        if (themeToggle.checked) {
            // Set dark mode
            document.documentElement.setAttribute('dataTheme', 'dark');
        } else {
            // Set light mode
            document.documentElement.setAttribute('dataTheme', 'light');
        }
    });
});
