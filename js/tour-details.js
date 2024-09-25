// tour-details.js

document.addEventListener('DOMContentLoaded', function() {
    const tourDetails = document.getElementById('tour-details');
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tour');

    // Tour data
    const tours = {
        'golden-gate-bridge-tour': {
            title: 'Golden Gate Bridge Tour',
            image: 'images/golden_gate_bridge_tour.jpg',
            description: 'Ride across the iconic Golden Gate Bridge to Sausalito. Enjoy stunning views of the bay and city skyline.',
            duration: '3 hours',
            price: '$55 per person',
            times: ['9:00 AM', '1:00 PM', '4:00 PM']
        },
        'streets-of-san-francisco': {
            title: 'Streets of San Francisco Tour',
            image: 'images/streets_of_san_francisco_tour.jpg',
            description: 'Explore the city\'s famous neighborhoods, including Chinatown, North Beach, and the Mission District.',
            duration: '4 hours',
            price: '$65 per person',
            times: ['10:00 AM', '2:00 PM']
        },
        'advanced-mountain-bike': {
            title: 'Advanced Mountain Bike Tour',
            image: 'images/advanced_mountain_bike_tour.jpg',
            description: 'Challenge yourself on rugged trails with stunning views of the Pacific Ocean.',
            duration: '5 hours',
            price: '$75 per person',
            times: ['8:00 AM']
        }
        // Add more tours as needed
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
