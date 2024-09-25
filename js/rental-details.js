// rental-details.js

document.addEventListener('DOMContentLoaded', function() {
    const rentalDetails = document.getElementById('rental-details');
    const urlParams = new URLSearchParams(window.location.search);
    const bikeParam = urlParams.get('bike');

    // Bike data
    const bikes = {
        'standard': {
            title: 'Standard Bike',
            image: 'images/standard_bike.jpg',
            description: 'Perfect for casual rides around the city.',
            price: '$20 per day'
        },
        'electric': {
            title: 'Electric Bike',
            image: 'images/electric_bike.jpg',
            description: 'Get a boost with our eco-friendly e-bikes.',
            price: '$35 per day'
        },
        'kids': {
            title: 'Kids Bike',
            image: 'images/kids_bike.jpg',
            description: 'Fun and safe bikes for young riders.',
            price: '$15 per day'
        }
    };

    const bike = bikes[bikeParam];

    if (bike) {
        rentalDetails.innerHTML = `
            <h1>${bike.title}</h1>
            <img src="${bike.image}" alt="${bike.title}">
            <p>${bike.description}</p>
            <p><strong>Price:</strong> ${bike.price}</p>
            <h3>Select Rental Details:</h3>
            <form id="rental-form">
                <label for="rental-date">Date:</label>
                <input type="date" id="rental-date" name="rental-date" required>
                <label for="rental-duration">Duration (days):</label>
                <input type="number" id="rental-duration" name="rental-duration" min="1" max="14" value="1" required>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" min="1" max="10" value="1" required>
                <button type="submit" class="button">Reserve Now</button>
            </form>
        `;

        document.getElementById('rental-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your reservation! We will send you a confirmation email shortly.');
            // Handle rental data submission here
        });
    } else {
        rentalDetails.innerHTML = '<p>Bike not found.</p>';
    }
});
