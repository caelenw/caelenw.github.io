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
    const movableimg = document.getElementById('movableimg');
    const container = document.getElementById('sec-3-container');

    if (slider && movableimg && container) {
        function updateMovableimg() {
            const sliderValue = slider.value;
            const maxMove = container.offsetWidth - movableimg.offsetWidth; 
            const newLeft = maxMove - (sliderValue / 100) * maxMove; 
            movableimg.style.left = `${newLeft}px`; 
        }

        function setInitialSliderValue() {
                slider.value = 0; 
                updateMovableimg(); 
        }

        setInitialSliderValue();

        slider.addEventListener('input', updateMovableimg);

        window.addEventListener('resize', () => {
            setInitialSliderValue(); 
        });
    }
});
