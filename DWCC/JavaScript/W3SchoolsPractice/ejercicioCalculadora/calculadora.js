function sumar() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function restar() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}