
<?php
//SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI
// Output messages
$responses = [];
// Check if the form was submitted
if (isset($_POST['tel'], $_POST['subject'], $_POST['name'], $_POST['msg'])) {
	// Validate email adress
	if (!filter_var($_POST['tel'], FILTER_VALIDATE_EMAIL)) {
		$responses[] = 'Email is not valid!';
	}
	// Make sure the form fields are not empty
	if (empty($_POST['tel']) || empty($_POST['subject']) || empty($_POST['name']) || empty($_POST['msg'])) {
		$responses[] = 'Please complete all fields!';
	} 
	// If there are no errors
	if (!$responses) {
		// Where to send the mail? It should be your email address
		$to      =  'contact@gilp.co.in'
		// Send mail from which email address?
		$from = 'info@gilp.co.in';
		// Mail subject
		$subject = $_POST['subject'];
		// Mail message
		$message = $_POST['msg'];
		// Mail headers
		$headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $_POST['tel'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		// Try to send the mail
		if (mail($to, $subject, $message, $headers)) {
			// Success
			$responses[] = 'Message sent!';		
		} else {
			// Fail
			$responses[] = 'Message could not be sent! Please check your mail server settings!';
		}
	}
}
?>>
