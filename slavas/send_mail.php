<?php
$mailto = "dax4@yandex.ru";
$mailto2 = "slavagavrilov08101997@mail.ru";
$charset = "utf-8";
$content = "text/html";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: $content  charset=$charset\r\n";
$headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
$headers .= "From: aplan-digital.ru - Заявка <aplan-digital.ru - Заявка>\r\n";
$subject = "Заявка aplan-digital.ru";
$from = "-fadmin@aplan-digital.ru";

$message = "Заявка<br>Имя: ".$_POST["name"]."<br>Номер: ".$_POST["phone"]."<br>Email: ".$_POST["email"]."<br>Сообщение: ".$_POST["task"];

mail("$mailto","$subject","$message","$headers","$from");
mail("$mailto2","$subject","$message","$headers","$from");
?>