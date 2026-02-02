//Puxa dados do HTML
const usuarioInput = document.getElementById('usuario')
const senhaInput = document.getElementById('senha')
const mensagem = document.getElementById('mensagem')
const form = document.getElementById('meuFormulario')

// Mudar as credenciais para a correta
const credenciais = {
    usuario: "admin",
    senha: "123"
}

// Mudar as expressões regulares para validação
const regexUsuario = /^[a-zA-Z0-9]+$/

// Função para verificar o acesso
function verificarAcesso(event) {
    event.preventDefault()// Ele envia o formulário sem recarregar a página

    // Mudar a verifica se o usuário e a senha estão corretos
    if (usuarioInput.value.trim() === "" || senhaInput.value === "") {
        mensagem.style.color = "yellow"
        mensagem.textContent = "Por favor, preencha todos os campos corretamente!"
        return
    } if (usuarioInput.value.trim() === credenciais.usuario && senhaInput.value === credenciais.senha) {
        mensagem.style.color = "white"
        mensagem.textContent = "Bem vindo chefe!"
        setTimeout(() => {
            //mudar a página de redirecionamento
            window.location.replace("/HTML/index.html")
        }, 1000)
        return
    } if (!regexUsuario.test(document.getElementById('usuario').value.trim())) {
        mensagem.style.color = "yellow"
        mensagem.textContent = "O nome de usuário não pode conter caracteres especiais!"
        return
    } if (usuarioInput.value.trim() !== credenciais.usuario || senhaInput.value !== credenciais.senha) {
        mensagem.style.color = "yellow"
        mensagem.textContent = "Usuário ou senha incorreta!"
        return
    } else {
        // Mudar a ação de acesso negado
        mensagem.style.color = "red"
        mensagem.textContent = "Acesso negado!"
        window.location.replace("https://www.google.com")
        return
    }
    //fim da verificação
}
form.addEventListener('submit', verificarAcesso)// Escuta o evento de envio do formulário