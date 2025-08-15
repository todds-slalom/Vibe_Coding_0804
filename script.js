function handleContact() {
    const messageDiv = document.getElementById('message');
    const button = document.querySelector('.contact-button');
    
    // Add loading state
    button.textContent = 'Contacting...';
    button.disabled = true;
    
    // Simulate contact process
    setTimeout(() => {
        messageDiv.innerHTML = '✉️ Thanks for your interest! I\'ll get back to you soon.';
        messageDiv.className = 'message success';
        messageDiv.style.display = 'block';
        
        // Reset button
        button.textContent = 'Contact Me';
        button.disabled = false;
        
        // Hide message after 3 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }, 1000);
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    
    // Add click effect to profile image
    profileImage.addEventListener('click', function() {
        this.style.transform = 'scale(1.1) rotate(360deg)';
        this.style.transition = 'transform 0.6s ease';
        
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 600);
    });
    
    // Add mouseover effect to profile image
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add some particle effects for fun
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = 'white';
    particle.style.borderRadius = '50%';
    particle.style.opacity = '0.7';
    particle.style.pointerEvents = 'none';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = '100vh';
    particle.style.zIndex = '1000';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
        { transform: 'translateY(0px) rotate(0deg)', opacity: 0.7 },
        { transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
    ], {
        duration: 3000 + Math.random() * 2000,
        easing: 'linear'
    });
    
    animation.onfinish = () => particle.remove();
}

// Create particles occasionally
setInterval(createParticle, 2000);
