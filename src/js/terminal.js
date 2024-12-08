function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.getElementById('command-input');
    const output = document.getElementById('output');

    const initialHeader = '<div class="header_text">ne0\'s Terminal. All rights reserved.</div>';
    const initialIntro = '<div class="intro_text">Type <strong>\'help\'</strong> to get started.</div>';

    // Initial output
    output.innerHTML = initialHeader + initialIntro;

    const helpText = `Available commands:
  help        show available commands
  clear       clear the terminal
  info        display information
  projects    list my projects
  contact     show contact information
  stack       display my tech stack`;

    const infoText = `i made this website because i was bored, soo nothing is here actually. projects coming soon...`;

    const projectsText = `empty -_-`;

    const contactText = `telegram: @illusionne0
email: illusionneodi@gmail.com`;

    const stackText = `- programming languages: pyton, piton, pyson
- frameworks and libs: import math, random
- tools: git, githab`;

    const symbolsText = `¡ ™ £ ¢ ∞ § ¶ • ª º ø ˆ ˙ © ƒ ® ß Ω ≈ ∂ ç √ ˚ ∆ † ¥ π ÷ €`;

    const easterEggs = {
        "neo": "welcome, master Neo. the matrix is ready.",
        "music": "Lil Uzi Vert - 20 min is the best song of all time",
        "666": "The devil prowls around like a roaring lion, seeking someone to devour. (1 Peter 5:8)",
        "dick": "are you serious right now?",
        "cock": "are you serious right now?",
        "yoda": "may the force be with you.",
        "symballs": symbolsText
    };

    // Function to simulate typing effect with faster speed
    function typeText(element, text, speed = 10) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
            }
        }, speed);
    }

    // Function to add output with typing effect
    function addOutputWithTyping(text) {
        const outputLine = document.createElement('div');
        outputLine.classList.add('output-text');
        output.appendChild(outputLine);
        typeText(outputLine, text);
        output.scrollTop = output.scrollHeight; // Scroll to the bottom
    }

    // Handle command input
    commandInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const input = commandInput.value.trim().toLowerCase();

            // Echo the command in the terminal
            output.innerHTML += `<div><span class="prompt">user@neo0ffice:~$</span> ${input}</div>`;

            // Command handling
            switch (input) {
                case 'help':
                    addOutputWithTyping(helpText);
                    break;
                case 'clear':
                    output.innerHTML = initialHeader + initialIntro;
                    break;
                case 'info':
                    addOutputWithTyping(infoText);
                    break;
                case 'projects':
                    addOutputWithTyping(projectsText);
                    break;
                case 'contact':
                    addOutputWithTyping(contactText);
                    break;
                case 'stack':
                    addOutputWithTyping(stackText);
                    break;
                case 'symballs':
                case 'neo':
                case 'music':
                case '666':
                case 'dick':
                case 'cock':
                case 'yoda':
                    addOutputWithTyping(easterEggs[input]);
                    break;
                default:
                    addOutputWithTyping(`Unknown command: ${input}`);
            }

            // Clear the input field and scroll to the bottom
            commandInput.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });
});
