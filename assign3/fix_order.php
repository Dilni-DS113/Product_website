<?php
require_once ("recipt.php");
$cost = trim($_POST["Ordercost"]);
$time = trim ($_POST["Ordertime"]);
$status =trim($_POST["time"]);

$query = "insert into $sql_table (cost, time, status) values ('$cost' , '$time' , $status)" ;
{


$recipt = mysqli_query($conn,$query);

if (!$result) {
	echo "<p class=\"wrong\">Something is wrong with",  $query, "</p>" ;
	
}else {
	echo "<p class=\"ok\">Successfully added Ticket order record</p>";
}

mysqli_close($conn);

}









?> 