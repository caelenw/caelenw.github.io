document.getElementById('click').addEventListener('click', () => {
    const navBar = document.getElementById("main-navigation");
    navBar.style.display = (navBar.style.display === "none" || navBar.style.display === "") ? "flex" : "none";
});
