document.addEventListener('DOMContentLoaded', () => {
    const counterButton = document.getElementById('counterButton');
    if (counterButton) {
        let counter = 0;
        counterButton.addEventListener('click', () => {
            counter++;
            counterButton.textContent = counter;
        });
    }

    const sec2Button = document.getElementById('sec-2');
    if (sec2Button) {
        sec2Button.addEventListener('click', () => {
            location.reload(); 
        });
    }

    const slider = document.getElementById('slider');
    const movableSquare = document.getElementById('movableSquare');
    const container = document.getElementById('sec-3-container');

    if (slider && movableSquare && container) {
        function updateMovableSquare() {
            const sliderValue = slider.value;
            const maxMove = container.offsetWidth - movableSquare.offsetWidth; 
            const newLeft = maxMove - (sliderValue / 100) * maxMove; 
            movableSquare.style.left = `${newLeft}px`; 
        }

        function setInitialSliderValue() {
                slider.value = 0; 
                updateMovableSquare(); 
        }

        setInitialSliderValue();

        slider.addEventListener('input', updateMovableSquare);

        window.addEventListener('resize', () => {
            setInitialSliderValue(); 
        });
    }
});
