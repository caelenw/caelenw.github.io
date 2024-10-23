const sendEmail = async (json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        return response;
    } catch (error) {
        console.log(error);
        const result = document.getElementById("result");
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contacted").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpResult = await sendEmail(json);

    if (httpResult && httpResult.status === 200) {
        result.innerHTML = "Email successfully sent";
    } else {
        result.innerHTML = "Sorry, your email wasn't sent";
    }
};
document.getElementById('contacted').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a FormData object to easily send form data
    const formData = new FormData(this);

    // Send the data using fetch
    fetch('your-server-endpoint', { // Replace with your actual endpoint
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            return response.text(); // Assuming your server returns a message
        }
        throw new Error('Network response was not ok.');
    })
    .then(message => {
        document.getElementById('result').innerText = message; // Display success message
    })
    .catch(error => {
        document.getElementById('result').innerText = 'There was an error: ' + error.message; // Display error message
    });
});
