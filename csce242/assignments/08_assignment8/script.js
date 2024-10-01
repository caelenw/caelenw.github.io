var toyImages = [
    "images/birthday.jpg", 
    "images/clown.jpg", 
    "images/rain.jpg", 
    "images/read.jpg", 
    "images/shovel.jpg",
    "images/work.jpg"
];
var titleBox = [
    "Happy Clown",
    "Confused Clown",
    "Raining",
    "Reading Clown",
    "Gardening Clown",
    "Working Clown"
    
];
var toyComments = [
    "A Clown is always happy on their birthday",
    "A Clown who is confused because there are no balloons.",
    "A Clown who is trying to keep his hair out of the rain",
    "A Clown who enjoys reading a good book.",
    "A hard-working clown digging up his garden",
    "Hard at work learning CSS, JavaScript, and HTML."
];

const displayImages = () => {
    const imageGallery = document.getElementById("image-gallery");
    const commentBox = document.getElementById("comment-box");
    const titleBoxElement = document.getElementById("title-box");

    imageGallery.innerHTML = ''; 
    commentBox.innerHTML = ''; 
    titleBoxElement.innerHTML = '';

    for (let i in toyImages) {
        const imgElem = document.createElement("img");
        imgElem.src = toyImages[i];
        imgElem.alt = "Image";

        imgElem.onclick = () => {
            titleBoxElement.innerHTML = titleBox[i];
            commentBox.innerHTML = toyComments[i];
        };

        imageGallery.appendChild(imgElem);
    }
};

window.onload = () => {
    displayImages();
};
