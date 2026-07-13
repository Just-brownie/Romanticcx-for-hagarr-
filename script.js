// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Terminal typing effect
const terminalLines = document.querySelectorAll('.terminal-line');
terminalLines.forEach((line, index) => {
    line.style.opacity = '0';
    line.style.animation = `slideUp 0.5s ease-out ${index * 0.2}s forwards`;
});

// Add CSS animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Scroll animations for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.profile-card, .skill-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Code syntax highlighting on scroll
const codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(block => {
    block.style.opacity = '0';
    const observer2 = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease forwards';
                observer2.unobserve(entry.target);
            }
        });
    });
    observer2.observe(block);
});

// Add fade in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(fadeInStyle);

// Mouse follow effect for glowing gradient
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.profile-card, .skill-card, .project-card');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        const distX = e.clientX - cardCenterX;
        const distY = e.clientY - cardCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
            const angle = Math.atan2(distY, distX);
            const glow = Math.max(0, 1 - distance / 200);
            card.style.boxShadow = `
                0 0 30px rgba(255, 0, 110, ${glow * 0.5}),
                inset 0 0 30px rgba(131, 56, 236, ${glow * 0.2})
            `;
        }
    });
});

// Add sparkle effect on hover
document.querySelectorAll('.skill-card, .profile-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.filter = 'drop-shadow(0 0 20px rgba(255, 0, 110, 0.6))';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
    });
});

// Dynamic text color cycling for headings
const headings = document.querySelectorAll('h2');
headings.forEach((heading, index) => {
    heading.style.animation = `colorPulse 3s ease-in-out infinite`;
    heading.style.animationDelay = `${index * 0.5}s`;
});

const colorPulseStyle = document.createElement('style');
colorPulseStyle.textContent = `
    @keyframes colorPulse {
        0%, 100% { text-shadow: 0 0 20px rgba(255, 0, 110, 0.5); }
        50% { text-shadow: 0 0 30px rgba(131, 56, 236, 0.7); }
    }
`;
document.head.appendChild(colorPulseStyle);

// Add click effect for interactive feedback
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
            transform: translate(-50%, -50%);
        }
    }
`;
document.head.appendChild(rippleStyle);

// Track page scroll for header styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
        navbar.style.boxShadow = '0 4px 15px rgba(255, 0, 110, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
        navbar.style.boxShadow = '0 4px 15px rgba(255, 0, 110, 0.2)';
    }
});

console.log('💻❤️ Website loaded for Hager!');
console.log('You are brilliant, beautiful, and destined for greatness.');
