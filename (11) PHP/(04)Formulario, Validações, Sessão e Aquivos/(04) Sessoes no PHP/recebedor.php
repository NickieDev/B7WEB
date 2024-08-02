<?php 
   session_start(); // Verifica se há sessão, se não tiver ele inicia

   // INPUT_POST para pegar dados no modo POST
   $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_SPECIAL_CHARS); // Transforma o conteúdo inserido no input para string evitando que seja inserido um script 
   $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
   $idade = filter_input(INPUT_POST, 'idade', FILTER_VALIDATE_INT); 
   // FILTER_SANITIZE_NUMBER_INT => // Pega somente os números interiros
   
   if($nome && $idade && $email) {
      echo "Nome: $nome </br>";
      echo "Email: $email </br>";
      echo "Idade: $idade";
   } else {
      $_SESSION['aviso'] = 'Preencha os itens corretamente';
      
      header("Location: index.php"); // Faz o  redirecionamento, mas só de pode usar quando não foi enviado nenhuma informação pra tela
      exit; // Eviar uma página em branco para fazer a mudança de header. Isso evita que os usuários burlem o sistama para ver o que acontece após o envio das informações
   }