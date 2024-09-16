document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const apiKey = document.getElementById('apiKey').value;
    fetch('https://your-api-endpoint.com/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').innerText = 'Login successful!';
            document.getElementById('message').style.color = '#5bc0de';
        } else {
            document.getElementById('message').innerText = 'Invalid API Key.';
            document.getElementById('message').style.color = '#d9534f';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').innerText = 'An error occurred.';
        document.getElementById('message').style.color = '#d9534f';
    });
});
