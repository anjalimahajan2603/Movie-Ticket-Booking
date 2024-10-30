// booking.js

function displayBookingDetails() {
    const bookingDetails = localStorage.getItem('bookingDetails');
    const detailsElement = document.getElementById('booking-details');

    if (bookingDetails) {
        detailsElement.textContent = `You have booked: ${bookingDetails}`;
    } else {
        detailsElement.textContent = 'No booking details found.';
    }
}

function goBack() {
    window.location.href = 'index.html'; // Redirect back to the main page
}

// Call the function to display booking details on page load
document.addEventListener('DOMContentLoaded', displayBookingDetails);
