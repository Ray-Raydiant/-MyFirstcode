// ==========================================
// BUTTON 1: Simple Click Message
// ==========================================
const myButton = document.getElementById('myButton');
const message = document.getElementById('message');

myButton.addEventListener('click', function() {
    message.textContent = '✨ You clicked the button! Great job! 🎉';
    message.style.color = '#28a745';
});

// ==========================================
// BUTTON 2: Change Background Color
// ==========================================
const colorButton = document.getElementById('colorButton');
const colorMessage = document.getElementById('colorMessage');
const colors = ['#FFE5E5', '#E5F3FF', '#E5FFE5', '#FFFFE5', '#F0E5FF'];
let colorIndex = 0;

colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorMessage.textContent = '🎨 Background color changed!';
    colorMessage.style.color = '#28a745';
    colorIndex = (colorIndex + 1) % colors.length;
});

// ==========================================
// BUTTON 3: Count Clicks
// ==========================================
const countButton = document.getElementById('countButton');
const countMessage = document.getElementById('countMessage');
let clickCount = 0;

countButton.addEventListener('click', function() {
    clickCount++;
    countMessage.textContent = `📊 Clicks: ${clickCount}`;
    countMessage.style.color = '#17a2b8';
    
    // Add celebration message at milestone clicks
    if (clickCount === 10) {
        alert('🎊 Wow! 10 clicks! You\'re doing great!');
    }
});

// ==========================================
// BUTTON 4: Personalized Greeting
// ==========================================
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetMessage = document.getElementById('greetMessage');

greetButton.addEventListener('click', function() {
    const name = nameInput.value.trim();
    
    if (name === '') {
        greetMessage.textContent = '⚠️ Please enter your name!';
        greetMessage.style.color = '#ff6b6b';
    } else {
        greetMessage.textContent = `👋 Hello, ${name}! Welcome to my website!`;
        greetMessage.style.color = '#28a745';
        nameInput.value = '';
    }
});

// Allow greeting with Enter key
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetButton.click();
    }
});

// ==========================================
// PROJECT BUTTON FUNCTIONALITY
// ==========================================
function viewProject(projectName) {
    alert(`🚀 You clicked on: ${projectName}\n\nMore details coming soon!`);
}

// ==========================================
// CONTACT FORM HANDLING
// ==========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop form from actually submitting
    
    // Get form values
    const nameField = contactForm.querySelector('input[type="text"]');
    const emailField = contactForm.querySelector('input[type="email"]');
    const messageField = contactForm.querySelector('textarea');
    
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const messageText = messageField.value.trim();
    
    // Validate form
    if (name === '' || email === '' || messageText === '') {
        alert('⚠️ Please fill in all fields!');
        return;
    }
    
    // Show success message
    alert(`✅ Thank you, ${name}!\n\nYour message has been received.\nI'll get back to you at ${email} soon!`);
    
    // Clear form
    contactForm.reset();
});

// ==========================================
// PAGE LOAD EVENT
// ==========================================
window.addEventListener('load', function() {
    console.log('✨ Welcome to My First Website!');
    console.log('🚀 JavaScript is working perfectly!');
    console.log('📚 Check the console to see what\'s happening behind the scenes.');
});