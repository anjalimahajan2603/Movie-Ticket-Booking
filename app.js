// app.js

document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    setupEventListeners();
});

// Function to load movies from an API or local data
function loadMovies() {
    const movieList = document.getElementById('movie-list');
    const movies = [
        { title: 'Movie 1', genre: 'Action', showtimes: ['12:00 PM', '3:00 PM', '6:00 PM'] },
        { title: 'Movie 2', genre: 'Drama', showtimes: ['1:00 PM', '4:00 PM', '7:00 PM'] },
    ];
    
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <h3>${movie.title} (${movie.genre})</h3>
            <p>Showtimes: ${movie.showtimes.join(', ')}</p>
            <button onclick="bookTicket('${movie.title}')">Book Ticket</button>
        `;
        movieList.appendChild(movieItem);
    });
}

// Function to set up event listeners
function setupEventListeners() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleFormSubmit);
}

// Function to handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    alert(`Thank you, ${name}! We will contact you at ${email}.`);
    form.reset();
}

// Function to handle ticket booking
function bookTicket(movieTitle) {
    alert(`You have booked a ticket for ${movieTitle}.`);
}
