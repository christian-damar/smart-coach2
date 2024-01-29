<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$curl = curl_init();

//$filesPlay = ["Corridas.pdf", "Pases.pdf", "Equipos especiales.pdf"];
//$files = ["Reglamentos coaches.pdf", "Formatos coaches.pdf", "Reglamento onefa.pdf", "Reglamento ofamo.pdf"];

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://smartcoach.top:2083/execute/Fileman/upload_files',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS => array('dir' => $_GET["dir"],'file'=> new CURLFILE($_FILES["File"]["tmp_name"],"application/pdf",  $_GET["filename"] . ".pdf")),
  CURLOPT_HTTPHEADER => array(
    'Authorization: cpanel df3artco4sf:82D3MJ2G4DTK5G5FYAAPKW8XASRNOT6Z'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
?>
