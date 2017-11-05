<?php

// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

	// put your email addresses here
	$from = 'info@gcjoel.net';
	$to = 'giancarlo.joel@gmail.com';

	// prepare a "pretty" version of the message
	// Important: if you added any form fields to the HTML, you will need to add them here also
	$body = "This is the form that was just submitted:

Name: $_POST[name]
Email: $_POST[email]

$_POST[message]";

	// Use the submitters email if they supplied one
	// (and it isn't trying to hack your form).
	// Otherwise send from your email address.
	// if( $_POST['email'] && !preg_match( "/[\r\n]/", $_POST['email']) ) {
	//   $headers = "From: $_POST[email]";
	// } else {
	//   $headers = "From: $youremail";
	// }

	// Send from your email address.
	$headers = "From: $from";

	// finally, send the message
	mail($to, 'Contact Form', $body, $headers );

}

// otherwise, let the spammer think that they got their message through

?>

<h1>Thanks</h1>
<p>Your message has been sent.</p>
<p><button class="popup-modal-close btn btn-large waves-effect deep-orange accent-3" href="#">Ok</button></p>
