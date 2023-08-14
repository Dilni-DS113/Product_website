<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name= "descriptions" content="Creating Web Applications Assigment 3" />
<meta name= "keywords" content= "PHP, MySql, " />
<title>recipt</title>
</head>
<body>
<h1> Your recipt</h1>
<?php 
require_once ("setting.php");
$conn = @mysqli_connect($host, 
            $user,
            $pwd,
            $sql_db
);			

if (!$conn) {
	echo "<p> Database connection failure</p>";
} else { 

$sql_table="Order" ;

$query = "cost , time, status FROM cars order by cost, time , status  ";
$recipt = mysqli_query($conn, $query);

if (!$recipt) {
	echo "<p>Something is wrong with ", $query, "</p>";
} else { 
echo "<table border=\"1\">\n";
echo "<tr>\n "
."<th scope=\"col\">Cost</th>\n"
."<th scope=\"col\">Time</th>\n" 
."<th scope=\"col\">Status</th>\n"
."</tr>\n " ; 

while ($row = mysqli_fetch_assoc($recipt)){
	echo "<tr>\n ";
	echo "<td>" ,$row["cost"], "</td>\n";
	echo "<td>" ,$row["time"], "</td>\n";
	echo "<td>" ,$row["status"], "</td>\n";
	echo "</tr>\n";
} 
echo "</table>\n ";

mysqli_free_result($recipt);
}



}

?>
</body  