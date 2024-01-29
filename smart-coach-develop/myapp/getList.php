
<?php

$result = array();
$dir =  $_GET["dir"];
foreach (new DirectoryIterator('./datos'.$dir) as $file) {
    if($file->isDot()) continue;
    if($file->getFilename() = "thumb")continue;
    $result[] = array(
        "name" => $file->getFilename(),
        "thumbnailUrl"=> "cuenta:cuenta@ftp10@smartcoach.top/back/datos/".$dir.$file->getFilename()
    );
}

echo  json_encode($result);
?>
