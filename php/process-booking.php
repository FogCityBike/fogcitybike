<?php
// Booking processing script

include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tour_type = $_POST['tour_type'];
    $private_tour = isset($_POST['private_tour']) ? 1 : 0;
    $tour_date = $_POST['tour_date'];
    $tour_time = $_POST['tour_time'];
    $participants = $_POST['participants'];

    // Calculate price (example pricing)
    $price_per_person = 50; // Base price
    if ($private_tour) {
        $price_per_person += 20; // Additional charge for private tour
    }
    $total_price = $price_per_person * $participants;
    $discounted_price = $total_price * 0.9; // Apply 10% discount

    // Insert booking into database
    $stmt = $conn->prepare("INSERT INTO bookings (tour_type, private_tour, tour_date, tour_time, participants, total_price) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sissid", $tour_type, $private_tour, $tour_date, $tour_time, $participants, $discounted_price);

    if ($stmt->execute()) {
        echo "Booking confirmed! Total price: $" . number_format($discounted_price, 2);
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
