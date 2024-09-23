const messageDiv = document.getElementById('message');
const colorSlider = document.getElementById('colorSlider');
const imageChooser = document.getElementById('image-chooser');
const sliderDiv = document.getElementById('slider');

colorSlider.oninput = () => {
    const r = colorSlider.value;
    const g = 0; 
    const b = 0; 

    sliderDiv.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; 

    if (r < 85) {
        messageDiv.textContent = "Getting reddish";
    } else if (r < 170) {
        messageDiv.textContent = "Vibin mild red!";
    } else {
        messageDiv.textContent = "Bright and angry red!";
    }
};

document.getElementById('exercise1').onclick = (event) => {
    event.preventDefault();
    sliderDiv.style.display = 'flex';
    imageChooser.style.display = 'none';
    location.reload();

};

function toggleMenu() {
    const navItems = document.getElementById('nav-items');
    navItems.classList.toggle('show');
}

document.getElementById('exercise2').onclick = (event) => {
    event.preventDefault(); 
    sliderDiv.style.display = 'none';
    imgContainer.style.display = 'flex';
};

function showImage(size) {
    const img = document.getElementById('chosen-image');
    let imgSize;

    if (size === 'small') {
        imgSize = '100/100'; 
    } 
    else if (size === 'medium') {
        imgSize = '200/200'; 
    } 
    else if (size === 'large') {
        imgSize = '400/400'; 
    }
    img.src = `https://picsum.photos/${imgSize}`;
    img.style.display = 'block'; 
}
