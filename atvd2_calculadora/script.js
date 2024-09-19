document.getElementById("calc").addEventListener("click", () => {
    const valor1 = parseFloat(document.getElementById("number1").value);
    const valor2 = parseFloat(document.getElementById("number2").value);
    const operacao = document.getElementById("opcao").value;
    let resultado = 0;

    switch (operacao) {
        case "som":
            resultado = somar(valor1, valor2);
            break;
        case "sub":
            resultado = subtrair(valor1, valor2);
            break;
        case "mult":
            resultado = multiplicar(valor1, valor2);
            break;
        case "div":
            resultado = dividir(valor1, valor2);
            break;
    }

    document.getElementById("result").textContent = resultado;
});

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("Impossível dividir por 0");
        return "Erro";
    }
    return a / b;
}
