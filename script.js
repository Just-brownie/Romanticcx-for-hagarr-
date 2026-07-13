// Movie database with romantic films
const romanticMovies = [
    {
        title: "The Notebook",
        year: 2004,
        rating: "5.0/5.0",
        emoji: "🌹",
        description: "An epic, emotionally-charged romance that spans decades and defines what it means to be in love."
    },
    {
        title: "Titanic",
        year: 1997,
        rating: "4.9/5.0",
        emoji: "🚢",
        description: "A legendary tale of love aboard the most famous ship, proving that love transcends class and fate."
    },
    {
        title: "The Fault in Our Stars",
        year: 2014,
        rating: "4.8/5.0",
        emoji: "⭐",
        description: "A beautiful story of two teenagers who fall in love while facing life's greatest challenges."
    },
    {
        title: "La La Land",
        year: 2016,
        rating: "4.7/5.0",
        emoji: "🎵",
        description: "A stunning modern musical about dreams, passion, and love in the city of angels."
    },
    {
        title: "Pride and Prejudice",
        year: 2005,
        rating: "4.9/5.0",
        emoji: "👑",
        description: "A timeless classic that captures the wit, charm, and passion of an unforgettable love story."
    },
    {
        title: "The Time Traveler's Wife",
        year: 2009,
        rating: "4.6/5.0",
        emoji: "⏰",
        description: "An extraordinary love story that defies time itself, proving some connections are timeless."
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        rating: "4.7/5.0",
        emoji: "✨",
        description: "A unique and thought-provoking romance about the power of memories and the essence of love."
    },
    {
        title: "Sleeping Beauty",
        year: 1959,
        rating: "4.8/5.0",
        emoji: "👸",
        description: "A magical fairy tale about true love's power to overcome any spell or obstacle."
    },
    {
        title: "The Greatest Showman",
        year: 2017,
        rating: "4.7/5.0",
        emoji: "🎪",
        description: "A spectacular musical celebrating love, acceptance, and following your dreams together."
    },
    {
        title: "Cinderella",
        year: 2015,
        rating: "4.7/5.0",
        emoji: "🥿",
        description: "A breathtaking live-action retelling of the ultimate fairy tale with a transformative love story."
    }
];

// Render movies
function renderMovies() {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = romanticMovies.map((movie, index) => `
        <div class="movie-card" style="animation: fadeInUp ${0.5 + index * 0.1}s ease;">
            <div class="movie-poster">${movie.emoji}</div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">📅 ${movie.year}</p>
                <span class="movie-rating">⭐ ${movie.rating}</span>
                <p class="movie-description">${movie.description}</p>
            </div>
        </div>
    `).join('');
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const message = form.querySelector('textarea').value;
    
    // Save to localStorage
    let messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    messages.push({
        name: name,
        message: message,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('loveMessages', JSON.stringify(messages));
    
    // Clear form
    form.reset();
    
    // Display messages
    displayMessages();
    
    // Show success message
    const btn = form.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent! 💕';
    setTimeout(() => {
        btn.textContent = originalText;
    }, 2000);
}

// Display saved messages
function displayMessages() {
    const messagesDisplay = document.getElementById('messagesDisplay');
    const messages = JSON.parse(localStorage.getItem('loveMessages') || '[]');
    
    if (messages.length === 0) {
        messagesDisplay.innerHTML = '';
        return;
    }
    
    messagesDisplay.innerHTML = '<h3 style="color: #ff69b4; margin-bottom: 1rem;">💭 Messages</h3>' + 
        messages.map(msg => `
            <div class="message-item">
                <div class="message-item-name">💕 ${msg.name}</div>
                <div class="message-item-text">"${msg.message}"</div>
                <div style="font-size: 0.8rem; color: #808080; margin-top: 0.5rem;">${msg.timestamp}</div>
            </div>
        `).reverse().join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderMovies();
    displayMessages();
    
    // Add smooth scroll behavior
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
});

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});