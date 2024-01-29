
<?php
include "VideoStream.php";
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$ftp_server = "ftp.smartcoach.top";
$ftp_conn = ftp_connect($ftp_server) or die("Could not connect to $ftp_server");
$login = ftp_login($ftp_conn, "df3artco4sf", "9de6AGnZ0!k*9Tus") or die("Could not login to $ftp_server");;
ftp_chdir($ftp_conn, $_GET["dir"]);

$filename = $_GET["filename"];
$flag = false;
// download server file
error_reporting(E_ALL ^ E_WARNING);
if (ftp_get($ftp_conn, $filename, $filename, FTP_ASCII)) {
    readfile($filename);
}else{
  echo "No se ha subido este archivo :)";
}
  

// close connection
ftp_close($ftp_conn);


?>
