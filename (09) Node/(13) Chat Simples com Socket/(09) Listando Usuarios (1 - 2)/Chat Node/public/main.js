const socket = io() 
let userName = ''
let userList = []

let loginPage = document.querySelector('#loginPage')
let chatPage = document.querySelector('#chatPage')

let loginInput = document.querySelector('#loginNameInput')
let textInput = document.querySelector('#chatTextInput')

loginPage.style.display = 'flex'
chatPage.style.display = 'none'

function renderUserList() {
   let ul = document.querySelector('.userList')
   ul.innerHTML = ''
   
   userList.forEach(i => {
      ul.innerHTML += '<li>' + i + '</li>'
   })
}

loginInput.addEventListener('keyup', (e) => {
   if(e.keyCode === 13) { // Enter
      let name = loginInput.value.trim()

      if(name != '') {
         userName = name
         document.title = `Chat (${name})`

         socket.emit('join-request', userName) // Emite uma mensagem pro servidor. É um Listener
      }
   }
})

socket.on('user-ok', (list) => { // Recebe do servidor
   loginPage.style.display = 'none'
   chatPage.style.display = 'flex'
   textInput.focus()

   userList = list // Preenche a lista com os usuários
   renderUserList()
})

socket.on('list-update', (data) =>{
   userList = data.list // Recebe a nova lista
   
   renderUserList()
})