document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
        emailError = 'Please enter a valid email address.';
    }

    if (!passwordRegex.test(password)) {
        passwordError = 'Password must be at least 8 characters long and contain letters, numbers, and special characters.';
    }

    if (password !== confirmPassword) {
        confirmPasswordError = 'Passwords do not match.';
    }

    document.getElementById('emailError').innerText = emailError;
    document.getElementById('passwordError').innerText = passwordError;
    document.getElementById('confirmPasswordError').innerText = confirmPasswordError;

    document.getElementById('emailError').style.display = emailError ? 'block' : 'none';
    document.getElementById('passwordError').style.display = passwordError ? 'block' : 'none';
    document.getElementById('confirmPasswordError').style.display = confirmPasswordError ? 'block' : 'none';

    if (!emailError && !passwordError && !confirmPasswordError) {
        alert('Form submitted successfully!');
    }
});