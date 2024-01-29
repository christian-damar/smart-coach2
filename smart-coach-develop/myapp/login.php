<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$email = $_GET["email"];
$pass = $_GET["pass"];
$equipo = strtolower($_GET["equipo"]);

if ($equipo == "admin"){
    $email =  explode("@",$email)[0] . "@smartcoach.top";
    $ftp = ftp_connect("ftp.smartcoach.top");
    if(ftp_login($ftp, $email, $pass)){
        $response =["response" => 1, "admin" => 1, "mensaje" => "Autenticacion correcta"];
    } else {
        $response =["response" => 0, "admin" => 0, "mensaje" => "Error en autenticacion  de administrador"];
    };
    ftp_close($ftp);
}else{
    $curl = curl_init();
    $email =  explode("@",$email)[0] . "@$equipo" . ".smartcoach.top";
    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://smartcoach.top:2083/execute/Email/verify_password?email=$email&password=$pass",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'GET',
    CURLOPT_HTTPHEADER => array(
        'Authorization: cpanel df3artco4sf:82D3MJ2G4DTK5G5FYAAPKW8XASRNOT6Z'
    ),
    ));

    $res = json_decode(curl_exec($curl));

    $response = ["response" => $res->status, "admin" => 0, "mensaje" => $res->errors];
    
    curl_close($curl);
}

    echo json_encode($response);
?>
