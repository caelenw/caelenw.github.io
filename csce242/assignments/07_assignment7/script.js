const starBox = document.getElementById('starBox');
const starInput = document.getElementById('star-input-val');
const drawButton = document.getElementById('drawButton');
const errorMessage = document.getElementById('error');
const messageDiv = document.getElementById('message'); 

drawButton.addEventListener('click', () => {
  const numStars = parseInt(starInput.value, 10);

  if (numStars <= 0 || !Number.isInteger(numStars)) {
    errorMessage.textContent = "Invalid value enter a value greater than 0";
    errorMessage.style.display = "block";
    return;
  } else {
    errorMessage.style.display = "none"; 
  }

  starBox.innerHTML = '';

  for (let i = 0; i < numStars; i++) {
    drawStar(i + 1);  
  }
});

function drawStar(starNumber) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  starBox.appendChild(star);

  star.addEventListener('click', () => {
    messageDiv.textContent = `star number: ${starNumber}`;
    messageDiv.classList.add('visible'); 
  });
}
