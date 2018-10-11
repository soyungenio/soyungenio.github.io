<?php
$mailto = "dax4@yandex.ru";
$mailto2 = "slavagavrilov08101997@mail.ru";
$mailto3 = "krashenevav@mail.ru";
$charset = "utf-8";
$content = "text/html";
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: $content  charset=$charset\r\n";
$headers .= "Date: ".date("Y-m-d (H:i:s)",time())."\r\n";
$headers .= "From: альт-строй.рф - Заявка <альт-строй.рф - Заявка>\r\n";
$subject = "Заявка альт-строй.рф";
$from = "-fadmin@альт-строй.рф";

$message = "Заявка<br>Имя: ".$_POST["name"]."<br>Номер: ".$_POST["phone"];

mail("$mailto","$subject","$message","$headers","$from");
mail("$mailto2","$subject","$message","$headers","$from");
mail("$mailto3","$subject","$message","$headers","$from");
?>