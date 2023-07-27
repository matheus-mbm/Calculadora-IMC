function calcular(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value
    let imc = peso / (altura * altura);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = imc.toFixed(2);
    setTimeout(limpar, 5000);
}

function limpar(){
     document.getElementById("altura").value = "";
     document.getElementById("peso").value = "";
     document.getElementById("resultado").innerHTML = "";
}