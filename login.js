function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate a password (at least 8 characters)
function isValidPassword(password) {
    return password.length >= 8;
}
function auth() {
    // Get the user's entered email and password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Perform your validation here
    // You can replace the following example with your actual validation logic

    if (isValidEmail(email) && isValidPassword(password)) {
        alert('Login successful!');
        window.location.assign("index.html");
        // You can add code here to perform the actual login.
    } else {
        alert('Invalid email or password. Please try again.');
    }
}