<?php
   session_start();

   $name = filter_input(INPUT_GET, 'name');

   if($name) {
      $_SESSION['name'] = $name;
      echo "Olá " . $_SESSION['name'] . " <br/><a href='login.php'>Sair</a>";
      $_SESSION['name'] = '';
   } else {
      $_SESSION['name'] = '';

      header("Location: login.php");
      exit;
   }
?>