<?php
$to = giancarlo.joel@gmail.com”;
$subject = “PHP Test mail”;
$message = “This is a test email”;
$from = “info@gcjoel.com”;
$headers = “From:” . $from;
mail($to,$subject,$message,$headers);
echo “Mail Sent.”;
?>
