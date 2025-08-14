<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    if (!empty($name) && !empty($email) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);

        try {
            // SMTP configuration
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';  
            $mail->SMTPAuth = true;
            $mail->Username = 'wchristianbarrios@gmail.com'; 
            $mail->Password = ''; 
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
            $mail->Port = 587; // TCP port

            // Email settings
            $mail->setFrom('wchristianbarrios@gmail.com', 'Will');
            $mail->addAddress('wchristianbarrios@gmail.com', 'will'); // Recipient's email

            $mail->isHTML(true);
            $mail->Subject = 'New Contact Form Message';
            $mail->Body = "<h2>Contact Request</h2>
                           <p><strong>Name:</strong> $name</p>
                           <p><strong>Email:</strong> $email</p>
                           <p><strong>Message:</strong><br>$message</p>";
            $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message"; // Plain text for non-HTML email clients

            // Send email
            if ($mail->send()) {
                echo "Thank you! Your message has been sent.";
            } else {
                echo "Mailer Error: " . $mail->ErrorInfo;
            }
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } else {
        echo "Please complete all fields correctly.";
    }
}
?>
