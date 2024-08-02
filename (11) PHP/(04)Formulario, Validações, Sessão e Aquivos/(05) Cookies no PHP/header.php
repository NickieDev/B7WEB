<h1>Header</h1>

<?php
   if(isset($_COOKIE['nome'])) { // Verifica se esta setado
      $nome = $_COOKIE['nome'];

      echo "<h2>$nome</h2>";
   }
?>

<hr/>