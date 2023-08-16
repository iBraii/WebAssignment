document.getElementById("newsletter").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // To check email validity
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Retrieve email
    const email = document.getElementById('emailInput').value;

    // Perform form validation
    if (!document.getElementById("newsletter").checkValidity() || !isValidEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }
    else {
        submitForm();
    }

    // Try to perform POST
    function submitForm() {
        const formData = new FormData(document.getElementById("newsletter"));
                fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Form submitted successfully:", data);
                    alert("Form successfully submitted.");
                })
                .catch(error => {
                    console.error("Error submitting form:", error);
                    alert("Error while submitting form.");
                });
    }

    // Clear the form after submission
    document.getElementById("newsletter").reset();
});