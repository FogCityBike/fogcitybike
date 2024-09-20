<?php
// Contact form processing script

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "operations@fogcitybike.com";
    $subject = "New Contact Us Message";
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message_body = htmlspecialchars($_POST['message']);
    $headers = "From: $email";

    $message = "Name: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Message:\n$message_body";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent!";
    } else {
        echo "There was a problem sending your message.";
    }
}
?>
