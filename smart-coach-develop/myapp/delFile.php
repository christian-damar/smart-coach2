<?php
$dir =  $_GET["dir"];
$file = $_GET["filename"];
echo "file:". getcwd(). "/datos".$dir.$file;
unlink(getcwd()."/datos".$dir.$file);
$name = explode(".",$file)[0] . ".jpg";
echo "thumb". getcwd(). "/datos".$dir."thumb/".$name;
unlink( getcwd()."/datos".$dir."thumb/".$name);
?>