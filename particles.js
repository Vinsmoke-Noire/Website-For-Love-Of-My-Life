// particles.js
document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.querySelector('.particle-container');
    if (particleContainer) {
        const particleCount = 20; // Jumlah partikel hati
        for (let i = 0; i < particleCount; i++) {
            let particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.width = `${Math.random() * 10 + 5}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particleContainer.appendChild(particle);
        }
    }
});