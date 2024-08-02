<?php
   $texto = file_get_contents('./text.txt'); 
   // echo $texto;
   $texto = explode("\n", $texto);
   
   echo "PARAGRAFOS: ".count($texto);