window.onload = function() {
    let progressBar = document.getElementById('monthly-expense-progress');
    let progressText = document.getElementById('monthly-expense-text');
    
    let progress = 44;
    progressBar.style.width = progress + '%';
    progressText.innerText = progress + '%';
};

document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};
document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});
