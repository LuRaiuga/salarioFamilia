
var btnCalc = document.querySelector("#btnCalc")

btnCalc.addEventListener("click", calcular);

// Calcular salário família
function calcular() {
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filhos").value;
    let salario = document.querySelector("#salario").value;
    let resposta = document.querySelector("#resposta");

    if (salario == 0) {
        resposta.innerHTML = `Insira um valor válido`;
    } else if (salario <= 806.80) {
        let resultado = filhos * 41.37;
        resposta.innerHTML = `O salario familia do ${empregado} é de R$: ${resultado.toFixed(2)}`;
    } else if (salario > 860.80 && salario <= 1212.64) {
        let resultado = filhos * 29.16;
        resposta.innerHTML = `O salario familia do ${empregado} é de R$: ${resultado.toFixed(2)}`;
    } else {
        resposta.innerHTML = `Salário fora do benefício`;
    }
}
