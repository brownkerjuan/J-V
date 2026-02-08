// Valentine's Day website JavaScript

// Function to handle the Valentine's Day greeting
function displayGreeting() {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const valentineDate = new Date(now.getFullYear(), 1, 14); // 14th February

    if (now.toDateString() === valentineDate.toDateString()) {
        greetingElement.innerText = "Happy Valentine's Day!";
    } else if (now < valentineDate) {
        const daysUntilValentine = Math.ceil((valentineDate - now) / (1000 * 60 * 60 * 24));
        greetingElement.innerText = `Countdown to Valentine's Day: ${daysUntilValentine} days`;
    } else {
        greetingElement.innerText = "Valentine's Day has passed. See you next year!";
    }
}

// Function to add interactive elements
function setupInteractiveElements() {
    const cardButton = document.getElementById('send-card');
    cardButton.addEventListener('click', function() {
        alert('A Valentine Card has been sent!');
    });
}

// Initialize the website on load
window.onload = function() {
    displayGreeting();
    setupInteractiveElements();
};