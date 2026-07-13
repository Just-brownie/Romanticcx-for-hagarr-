// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.about-card, .love-item, .moment-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add sparkle effect on card hover (desktop)
if (window.innerWidth > 768) {
    document.querySelectorAll('.about-card, .moment-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 20px rgba(255, 22, 84, 0.7))';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
}

// Mobile touch feedback
document.querySelectorAll('.love-item').forEach(item => {
    item.addEventListener('touchstart', function() {
        this.style.backgroundColor = 'rgba(255, 22, 84, 0.2)';
    });
    
    item.addEventListener('touchend', function() {
        this.style.backgroundColor = 'rgba(255, 22, 84, 0.15)';
    });
});

// Add pulse animation to emoji on love items
document.querySelectorAll('.love-emoji').forEach((emoji, index) => {
    emoji.style.animation = `bounce 2s ease-in-out infinite`;
    emoji.style.animationDelay = `${index * 0.1}s`;
});

// Heart animation enhancement
const hearts = document.querySelectorAll('.heart');
hearts.forEach((heart, index) => {
    heart.style.animation = `float 8s ease-in-out infinite`;
    heart.style.animationDelay = `${index * 1}s`;
});

// Add dynamic glow to headings
const headings = document.querySelectorAll('h2');
headings.forEach(heading => {
    heading.style.transition = 'all 0.3s ease';
});

// Mobile menu optimization
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        setTimeout(() => {
            // Menu would collapse here if implemented
        }, 100);
    });
});

// Prevent double tap zoom on buttons
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('touchend', function(e) {
        e.preventDefault();
        this.click();
    }, false);
});

// Add viewport height adjustment for mobile
if (window.innerWidth <= 768) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
}

// Animate message content on scroll into view
const messageContainer = document.querySelector('.message-container');
if (messageContainer) {
    const messageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 1s ease-out';
                messageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    messageObserver.observe(messageContainer);
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes bounce {
        0%, 100% { 
            transform: scale(1); 
        }
        50% { 
            transform: scale(1.15); 
        }
    }
`;
document.head.appendChild(style);

// Update navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 25px rgba(255, 22, 84, 0.35)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(255, 22, 84, 0.3)';
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.tagName === 'A') {
            focusedElement.click();
        }
    }
});

// Animate background shapes on load
const shapes = document.querySelectorAll('.animated-shape');
shapes.forEach((shape, index) => {
    shape.style.opacity = '0.3';
    shape.style.animation = `rotate ${20 + index * 5}s linear infinite ${index % 2 === 0 ? '' : 'reverse'}`;
});

// Add random floating animation to bubbles
const bubbles = document.querySelectorAll('.bubble');
bubbles.forEach((bubble, index) => {
    const duration = 8 + Math.random() * 8;
    bubble.style.animation = `float ${duration}s ease-in-out infinite`;
    bubble.style.animationDelay = `${index * 1.5}s`;
});

// Parallax effect on scroll (subtle)
window.addEventListener('scroll', () => {
    const shapes = document.querySelectorAll('.animated-shape');
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
        const yOffset = scrolled * (0.1 + index * 0.05);
        shape.style.transform = `translateY(${yOffset}px)`;
    });
});

// Console message
console.log('%c💕 Hager, I love you so much! 💕', 'color: #ff1654; font-size: 20px; font-weight: bold;');
console.log('%cYou are amazing, beautiful, brilliant, and perfect. 💻❤️', 'color: #ff006e; font-size: 14px;');
console.log('%cThis website is made just for you with all my love ❤️', 'color: #00ffff; font-size: 14px;');
