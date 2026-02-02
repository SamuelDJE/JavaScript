
alert("Bem vindo Senhor, eu sou o DJE, sua IA Avançada")
let User = prompt("Digite: ")
function Protocolos(User) {
    while (User.toLocaleLowerCase() != "sair") {
        switch (User.toLocaleLowerCase()) {
            case "ptl":
                    alert("Protocolos...")
                    window.location.replace("/HTML/protocolos.html")
                break;
            case "dje":
                // codigo de uma IA avançada aos poucos colocar aqui
                break;
            case "pjt":
                alert("Vamos trabalhar senhor, oque está pensado em fazer?")
                window.location.replace("projetos.html")
                break;
            case "":
                alert("Por favor, digite algo")
                break;
            default:
                alert("Não consigo responder isso")
                break;
        }
        User = prompt("Se eu puder ajudar em algo mais só me falar\nDigite Sair para encerrar")

    }
}
Protocolos(User)
alert("Conversa encerrada, até mais!")