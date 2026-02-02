function Protocolos(protocol) {
    protocol = prompt("Digite o código do protocolo que deseja acessar: ")
    if (protocol ==="777") {
        alert("Bem vindo à rede de comunicação DJE.")
        //Adicionar funcionalidades de comunicação aqui (usa micro-ondas e ondas-curtas para comunicação)
    } else if(protocol ==="17"){
        alert("Reiniciado o sistema...")
        //Adicionar código para reiniciar o sistema
    }else if(protocol ==="27"){
        alert("Escondendo o sistema...")
        //Adicionar código para esconder o sistema
    }else if(protocol ==="17062023"){
        alert("Acessando o Olho de Deus...")
        //Adicionar código para acessar o Olho de Deus
    }else if(protocol ==="Sfpds"){
        alert("Controlando o DJE remotamente...")
        //Adicionar código para controle remoto do DJE
    }else if(protocol ==="Dados"){
        alert("Acessando o aprendizado do DJE...")
        //Adicionar código para acessar dados de aprendizado
    }else{
        alert("Código de protocolo inválido.")
    }
}
let protocol = ""
Protocolos(protocol)