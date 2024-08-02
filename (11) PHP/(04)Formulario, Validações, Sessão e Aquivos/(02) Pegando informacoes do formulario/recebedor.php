<?php 
   $nome = filter_input(INPUT_GET, 'nome'); // INPUT_POST para pegar dados no modo POST
   $idade = filter_input(INPUT_GET, 'idade');
   
   if($nome && $idade) {
      echo "Nome: $nome </br>";
      echo "Idade: $idade";
   } else {
      // echo "Dado(s) não informado(s)";
      header("Location: index.php"); // Faz o  redirecionamento, mas só de pode usar quando não foi enviado nenhuma informação pra tela
      exit; // Eviar uma página em branco para fazer a mudança de header. Isso evita que os usuários burlem o sistama para ver o que acontece após o envio das informações
   }