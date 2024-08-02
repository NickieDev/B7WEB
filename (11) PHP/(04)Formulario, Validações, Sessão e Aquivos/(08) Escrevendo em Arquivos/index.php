<?php
   // $texto = file_get_contents('./text.txt');  // Faz a leitura do arquivo
   $texto = 'Nick Matsubara';

   file_put_contents('name.txt', $texto); // Se o conteúdo não existi ele escreve e se existi ele substitui

   echo "Arquivo criado com sucesso";

   // Na forma abaixo ele le e insere o texto, em resumo é ocmo se fizesse uma concatenação
   $newText = file_get_contents('newText.txt'); 
   $newText .= "\nNick Matsubara";

   file_put_contents('newText.txt', $newText);