function calculos(a,b) {
    let operacao = prompt("Escolha operação desejada: +,-,*,/")
    switch (operacao) {
        case "+":
            calcular = Number(a)+Number(b)
            alert(`O Resultado é ${calcular}`)
            break;
        case "-":
            calcular = Number(a)-Number(b)
            alert(`O Resultado é ${calcular}`)   
            break;
        case "*":
            calcular = Number(a)*Number(b)
            alert(`O Resultado é ${calcular}`)
            break;
        case "/":
            calcular = Number(a)/Number(b)
            alert(`O Resultado é ${calcular}`)
            break;  
        case "%":
            calcular = Number(a)%Number(b)
            alert(`O Resultado é ${calcular}`)
            break;
        case "**":
            calcular = Number(a)**Number(b)
            alert(`O Resultado é ${calcular}`)
            break;
        default:
            alert("Operação inválida")
            break;
    }
}
let calcular= ""
let a = prompt("Digite o primeiro número: ")
let b = prompt("Digite o segundo número: ")
calculos(a,b)
