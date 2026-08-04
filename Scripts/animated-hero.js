function typeEffect(selector, texts, typingSpeed, pauseTime) {
    const element = document.querySelector(selector);
    let currentIndex = 0;
    let charIndex = 0;

    function type() {
        const text = texts[currentIndex];
        
        if (charIndex < text.length) {
            element.textContent += text[charIndex];
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                element.textContent = "";
                charIndex = 0;
                currentIndex = (currentIndex + 1) % texts.length;
                type();
            }, pauseTime);
        }
    }

    type();
}

// Usage:
typeEffect('#hero-header-span', ["Botswana", "Pi  Network"], 100, 1500);