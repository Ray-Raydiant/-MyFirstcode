// Get the button and message elements
const myButton = document.getElementById('myButton');
const message = document.getElementById('message');

// Add a click event listener to the button
myButton.addEventListener('click', function() {
    message.textContent = 'You clicked the button! Great job! 🎉';
});

// Optional: Add a message when the page loads
window.addEventListener('load', function() {
    console.log('Welcome to my first website!');
});