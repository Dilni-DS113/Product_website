<!DOCTYPE html>
<html lang="en">
<head>
	<title>Booking Confirmation</title>
	<meta charset="utf-8"/>
	<meta name="description" content="Rohirrim Booking Form" />
	<meta name="keywords"    content=" " />
</head>

<body> 
<h1>Process the order</h1>
<?php 
function sanitise_input($data){
	$data = trim ($data);
    $data  = stripslashes($data);
   $data = htmlspecialchars ($data);
   $data = htmlspecialchars ($data);
   return $data;
   
   $order_id = sanitise_input($order_id);
   $cost = sanitise_input($cost);
   $time = sanitise_input($time); 
   $status = sanitise_input($status);
}


?> 
