// (18) Webpack - Exemplo: Criando um Compronente

import $ from 'jquery'
import './css/style.css'
import Botao from './components/botao/index'

// npx webpack => Roda o webpack
// npx webpack --config webpack.config.js => Apos o arquivo do Webpack estar configurado
// npm run build => Depois de configurar o script no package.json

$(function() {

   let botao = new Botao()
   botao.setTitle('Testador')
   botao.setClick(function() {
      alert('Clicou')
   })
   
   $('.area').html( botao.render() )
})