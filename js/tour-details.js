// tour-details.js

document.addEventListener('DOMContentLoaded', function() {
    const tourDetails = document.getElementById('tour-details');
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tour');

    // Tour data
    const tours = {
        'golden-gate': {
            title: 'Golden Gate Adventure Tour',
            image: 'images/golden_gate_tour.jpg',
            description: 'Discover the iconic Golden Gate Bridge and Sunny Sausalito on this guided tour.',
            duration: '3 hours',
            price: '$65 per person',
            times: ['9:00 AM', '1:00 PM', '4:00 PM']
        },
        'muir-woods': {
            title: 'Muir Woods Coastline Ride',
            image: 'images/muir_woods_tour.jpg',
            description: 'Ride over the Golden Gate Bridge and up Mt. Tam and visit breathtaking Redwood groves with ocean views.',
            duration: '5 hours',
            price: '$85 per person',
            times: ['8:00 AM', '12:00 PM']
        },
        'sunset': {
            title: 'San Francisco Sunset Tour',
            image: 'images/sunset_tour.jpg',
            description: 'Experience the sun setting over the Pacific from the Golden Gate Bridge.',
            duration: '2 hours',
            price: '$55 per person',
            times: ['6:00 PM']
        }
    };

    const tour = tours[tourParam];

    if (tour) {
        tourDetails.innerHTML = `
            <h1>${tour.title}</h1>
            <img src="${tour.image}" alt="${tour.title}">
            <p>${tour.description}</p>
            <p><strong>Duration:</strong> ${tour.duration}</p>
            <p><strong>Price:</strong> ${tour.price}</p>
            <h3>Select a Start Time:</h3>
            <form id="booking-form">
                <label for="tour-date">Date:</label>
                <input type="date" id="tour-date" name="tour-date" required>
                <label for="tour-time">Time:</label>
                <select id="tour-time" name="tour-time" required>
                    ${tour.times.map(time => `<option value="${time}">${time}</option>`).join('')}
                </select>
                <label for="participants">Number of Participants:</label>
                <input type="number" id="participants" name="participants" min="1" max="10" value="1" required>
                <button type="submit" class="button">Book Now</button>
            </form>
        `;

        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for booking! We will send you a confirmation email shortly.');
            // Handle booking data submission here
        });
    } else {
        tourDetails.innerHTML = '<p>Tour not found.</p>';
    }
});
