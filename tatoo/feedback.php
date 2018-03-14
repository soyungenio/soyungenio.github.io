<?php
$mailto = "dax4@yandex.ru";
$mailto2 = "tatoo_box@mail.ru";
$charset = "utf-8";
$content = "text/html";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: $content  charset=$charset\r\n";
$headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
$headers .= "From: tatoobox.ru - Заявка <www.tatoobox.ru - Заявка>\r\n";
$subject = $_GET["head"];
$from = "-fadmin@tatoobox.ru";

$message = $_GET["text"];

mail("$mailto","$subject","$message","$headers","$from");
mail("$mailto2","$subject","$message","$headers","$from");
?>