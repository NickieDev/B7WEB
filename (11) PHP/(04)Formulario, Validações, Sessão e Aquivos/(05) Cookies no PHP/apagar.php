<?php 
   setcookie('nome', '', time() - 3600); // Apaga o cookie

   header('Location: index.php');
   exit;