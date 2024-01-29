
<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$mime = $_FILES["File"]["type"];
$image = $_POST["Image"];

if((strstr($mime, "video/")  or strstr($mime, "image/")) and strstr($image, "image/")) {
    $dir  = "public_html/back/datos/".$_GET["dir"];
    $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://smartcoach.top:2083/execute/Fileman/upload_files',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => array('dir' => $dir,'file'=> new CURLFILE($_FILES["File"]["tmp_name"], $mime, $_FILES["File"]["name"])),
    CURLOPT_HTTPHEADER => array(
        'Authorization: cpanel df3artco4sf:82D3MJ2G4DTK5G5FYAAPKW8XASRNOT6Z'
    ),
    ));
    $response = curl_exec($curl);
    curl_close($curl);

    file_put_contents("temp.jpg", file_get_contents($image));

        $name = explode(".",$_FILES["File"]["name"])[0];
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://smartcoach.top:2083/execute/Fileman/upload_files',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => array('dir' => $dir . "/thumb/",'file'=> new CURLFILE("temp.jpg", "image/jpg", $name.".jpg")),
        CURLOPT_HTTPHEADER => array(
            'Authorization: cpanel df3artco4sf:82D3MJ2G4DTK5G5FYAAPKW8XASRNOT6Z'
        ),
        ));

        $response = $response.curl_exec($curl);

        curl_close($curl);
}else{
    $response = "archivo invalido";
}

echo $response;
?>
