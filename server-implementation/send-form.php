<?php
/**
 * Form handler for Isolated AI website
 * 
 * This script receives form submissions from the website and forwards them via email.
 * Designed to work in a standard cPanel hosting environment.
 */

// ===== CONFIGURATION =====
// Change these settings according to your needs

// Your email address where form submissions will be sent
$recipient_email = "info@lkdv.fi";

// Website domain that's allowed to send requests (CORS)
// Change this to your domain
$allowed_origin = "https://lkdv.fi";

// Add a basic security token (shared secret between this script and your frontend)
// Change this to a random string and make sure it matches what you set in your frontend
$security_token = "A9f3dR7xH2pQ5sT1zL8mN6bV0cK4eG";

// Rate limiting - prevent spam by limiting submissions
$rate_limit_file = "rate_limit.txt";
$max_submissions_per_hour = 10;

// ===== CORS HEADERS =====
header("Access-Control-Allow-Origin: $allowed_origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Security-Token");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ===== INPUT VALIDATION =====
// Ensure this is a POST request
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Check security token
$headers = getallheaders();
if (!isset($headers['X-Security-Token']) || $headers['X-Security-Token'] !== $security_token) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Unauthorized']);
    exit();
}

// Apply rate limiting
if (file_exists($rate_limit_file)) {
    $rate_data = json_decode(file_get_contents($rate_limit_file), true);
    
    // Clean up old entries (older than 1 hour)
    $current_time = time();
    $filtered_timestamps = array_filter($rate_data['timestamps'], function($timestamp) use ($current_time) {
        return ($current_time - $timestamp) < 3600;
    });
    
    if (count($filtered_timestamps) >= $max_submissions_per_hour) {
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Too many requests. Please try again later.']);
        exit();
    }
    
    $rate_data['timestamps'] = $filtered_timestamps;
} else {
    $rate_data = ['timestamps' => []];
}

// Add current timestamp to the rate limit data
$rate_data['timestamps'][] = time();
file_put_contents($rate_limit_file, json_encode($rate_data));

// Get the raw POST data and decode the JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate the data
if (!$data || !isset($data['type']) || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request data']);
    exit();
}

// Basic anti-bot check - if certain field patterns are found in the message
if (preg_match('/(viagra|cialis|casino|poker)/i', json_encode($data))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected']);
    exit();
}

// ===== EMAIL PREPARATION =====
// Set up the email variables based on form type
$to = $recipient_email;
$subject = "";
$message = "";
$email_from = filter_var($data['email'], FILTER_SANITIZE_EMAIL);

// Prepare message based on form type
if ($data['type'] === 'contact') {
    // Contact form submission
    $subject = "Isolated AI: New Contact Form Submission";
    $message = "Contact Form Submission Details:\n\n";
    $message .= "Name: " . htmlspecialchars($data['name']) . "\n";
    $message .= "Email: " . htmlspecialchars($data['email']) . "\n";
    $message .= "Company: " . htmlspecialchars($data['company']) . "\n";
    $message .= "Job Title: " . htmlspecialchars($data['jobTitle']) . "\n";
    $message .= "Message: \n" . htmlspecialchars($data['message']) . "\n";
    $message .= "\n---\nThis email was sent from the contact form on your Isolated AI website.";
} elseif ($data['type'] === 'pilot') {
    // Pilot program submission
    $subject = "Isolated AI: New Pilot Program Application";
    $message = "Pilot Program Application Details:\n\n";
    $message .= "Name: " . htmlspecialchars($data['name']) . "\n";
    $message .= "Email: " . htmlspecialchars($data['email']) . "\n";
    $message .= "Company: " . htmlspecialchars($data['company']) . "\n";
    $message .= "Industry: " . htmlspecialchars($data['industry']) . "\n";
    $message .= "Use Case: \n" . htmlspecialchars($data['useCase']) . "\n\n";
    $message .= "Challenges: \n" . htmlspecialchars($data['challenge']) . "\n";
    $message .= "\n---\nThis email was sent from the pilot program form on your Isolated AI website.";
} else {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid form type']);
    exit();
}

// Email headers
$headers = "From: Isolated AI Website <$email_from>\r\n";
$headers .= "Reply-To: " . htmlspecialchars($data['name']) . " <$email_from>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ===== SEND EMAIL =====
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
} else {
    // Log the error if mail() fails
    error_log("Failed to send form email from " . $data['email']);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
