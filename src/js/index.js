// animation.js
const textArray = ["Welcome to my office", "Now go fuck away", "Just kidding", "Find info about me here", "¡™£¢∞§¶ªºœ∑®†¥ø≈ç√∫µ"];
let currentIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Speed of typing (ms)
const deletingSpeed = 50; // Speed of deleting (ms)
const delayBetweenTexts = 1500; // Delay between texts (ms)

const animatedText = document.getElementById("animatedText");

function typeText() {
    if (charIndex < textArray[currentIndex].length) {
        animatedText.textContent += textArray[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(deleteText, delayBetweenTexts);
    }
}

function deleteText() {
    if (charIndex > 0) {
        animatedText.textContent = textArray[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(typeText, delayBetweenTexts);
    }
}

// Start the animation
typeText();

// Open modal
const gridBlocks = document.querySelectorAll('.grid_block');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-btn');

gridBlocks.forEach(block => {
    block.addEventListener('click', () => {
        const modalId = block.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

// Close modal when clicking close button
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside modal content
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

