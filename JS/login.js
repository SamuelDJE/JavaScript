function Login(senha, user) {
    for (let chances = 2; chances >= 1 ; chances--) {
        if(senha !=="123"){
            alert ("Senha incorreta, tente novamente")
            senha = prompt ("Digite a senha: ")
        } else {
            break
        }  
    }
    //Caso o usuário erre a senha, ele terá mais 2 tentativas
    //Verifica senha e caso esteja certo verifica usuário
    if (senha === "123" ){
        user = prompt("Digite o nome de usuário: ")
        if (user === "admin"){
            alert("Bem vindo chefe")
            alert("Redirecionando...")
            //Direciona para o chatbot
            window.location.replace("chatbot.html")
        }else if (user !== "admin"){
        console.log("Usuário não reconhecido")
        alert("Usuário não reconhecido")
    }
    }else {
        console.log("Acesso negado")
        alert("Acesso negado") 
    }
}
let user = ""
let senha = prompt("Digite a senha: ")
Login(senha, user)
