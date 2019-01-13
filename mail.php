<?php 

$subject  = "PrimeService";

$name = $_POST['name'] ?:'';
$phone = $_POST['phoneNumber'] ?:'';
$comment = $_POST['comment'] ?:'';

$message = '
        <p><b>Имя:</b> '.$name.'</p>
        <p><b>Телефон:</b> '.$phone.'</p>'
        <p><b>Комментарий:</b> '.$comment.'</p>';

 

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: PrimeService <info@primeservice.com>\r\n";

mail('PrimeService@gmail.com', $subject, $message, $headers );
	
?>