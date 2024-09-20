// Booking Form Script

document.addEventListener('DOMContentLoaded', function () {
    const tourType = document.getElementById('tour-type');
    const tourTime = document.getElementById('tour-time');
    const privateTourCheckbox = document.getElementById('private-tour');

    function populateTimes() {
        let times = [];

        if (privateTourCheckbox.checked) {
            // Half-hour increments from 8:00 AM to 8:00 PM
            times = generateHalfHourTimes(8, 20);
        } else {
            if (tourType.value === 'ggb') {
                times = ['10:00 AM', '1:30 PM'];
            } else if (tourType.value === 'sosf') {
                times = ['11:00 AM'];
            } else if (tourType.value === 'self-guided') {
                times = ['8:00 AM - 8:00 PM'];
            }
        }

        tourTime.innerHTML = '';
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
            ['00', '30'].forEach(min => {
                const timeString = formatTime(hour, min);
                times.push(timeString);
            });
        }
        return times;
    }

    function formatTime(hour, min) {
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${min} ${ampm}`;
    }

    tourType.addEventListener('change', populateTimes);
    privateTourCheckbox.addEventListener('change', populateTimes);
    populateTimes();
});
