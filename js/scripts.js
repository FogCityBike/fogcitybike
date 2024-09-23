// Booking Form Script

document.addEventListener('DOMContentLoaded', function () {
    const tourType = document.getElementById('tour-type');
    const tourTime = document.getElementById('tour-time');
    const privateTourCheckbox = document.getElementById('private-tour');

    function populateTimes() {
        let times = [];

        const isPrivate = privateTourCheckbox.checked;
        const tour = tourType.value;

        if (isPrivate) {
            // Private Tours: Every half hour from 8 AM to 5 PM
            times = generateHalfHourTimes(8, 17);
        } else {
            if (tour === 'ggb') {
                // GGB Public Tour: 10:00 AM and 2:00 PM
                times = ['10:00 AM', '2:00 PM'];
            } else if (tour === 'sosf') {
                // SoSF Public Tour: 11:00 AM
                times = ['11:00 AM'];
            } else if (tour === 'self-guided') {
                // Self-Guided Tour: 8:00 AM - 8:00 PM
                times = ['8:00 AM - 8:00 PM'];
            }
        }

        // Clear existing options
        tourTime.innerHTML = '';

        // Populate new options
        times.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            tourTime.appendChild(option);
        });
    }

    function generateHalfHourTimes(startHour, endHour) {
        const times = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            ['00', '30'].forEach(minute => {
                if (hour === endHour && minute === '30') return;
                times.push(formatTime(hour, minute));
            });
        }
        return times;
    }

    function formatTime(hour, minute) {
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minute} ${ampm}`;
    }

    // Event listeners
    tourType.addEventListener('change', populateTimes);
    privateTourCheckbox.addEventListener('change', populateTimes);

    // Initial population of times
    populateTimes();
});
