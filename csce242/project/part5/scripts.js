window.onload = function() {
    let progressBar = document.getElementById('progressBar');
    let progressText = document.getElementById('progressText');
    
    // Set the initial progress value (44%)
    let progress = 44;
    progressBar.style.width = progress + '%';
    progressText.innerText = progress + '%';
};
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.querySelector('a').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block'; // Toggle dropdown
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none'; // Close dropdown if clicked outside
        }
    });
});
