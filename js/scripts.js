/* Parallax Video Effect */
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var videoBackground = document.getElementById('video-background');

    if (scrollPosition <= 300) {
        videoBackground.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    } else {
        videoBackground.style.transform = 'translateY(150px)';
    }
});

/* Rotating Slogans */
const slogans = [
    "The Ultimate Way to Ride San Francisco",
    "Discover San Francisco in Style",
    "Quality. Adventure. Luxury.",
    "Where Every Ride Becomes a Memory",
    "Ride with Us, Explore the City, Live the Experience"
];

let sloganIndex = 0;
const sloganElement = document.querySelector('.slogan p');

function changeSlogan() {
    sloganIndex = (sloganIndex + 1) % slogans.length;
    sloganElement.textContent = slogans[sloganIndex];
}

setInterval(changeSlogan, 5000); // Change slogan every 5 seconds
