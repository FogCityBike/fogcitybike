document.addEventListener("DOMContentLoaded", function() {
    const slogans = [
        "Experience Adventure Like Never Before",
        "Discover the Magic of San Francisco",
        "Unforgettable Bike Tours Await You"
    ];
    
    let sloganIndex = 0;
    const sloganElement = document.getElementById("slogan");

    setInterval(() => {
        sloganIndex = (sloganIndex + 1) % slogans.length;
        sloganElement.textContent = slogans[sloganIndex];
    }, 3000); // Rotate slogans every 3 seconds
});
