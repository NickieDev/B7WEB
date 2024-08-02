<?php
   function renderList($list) {
      // Transforma em ARRAY 
      $newList = explode("\n", $list);
   
      // Percorre a lista e cria uma tag 'li' para cada item
      foreach($newList as $item) {
         echo "<li>$item</li>";
      }
   }
?>

   <form method="GET">
      <label for="name">Nome</label>
      <input type="text" name="name">
      <button type="submit">Adicionar</button>
   </form>

   <ul>
      <?php
         // Pega o valor do input
         $newName = filter_input(INPUT_GET, 'name');

         // Seleciona a lista
         $list = file_get_contents('list.txt');

         if($newName) {
            $list .= "\n$newName" ;
   
            // Salva a lista
            file_put_contents('list.txt', $list);
            
            // Chama a função que transforma os arquivos da lista em um ARRAY e percorre cada item dela e cria uma tag 'li' para cada uma delas
            renderList($list);
         } else {
            $newName = "";

            // Chama a função que transforma os arquivos da lista em um ARRAY e percorre cada item dela e cria uma tag 'li' para cada uma delas
            renderList($list);
         }
      ?>
   </ul>