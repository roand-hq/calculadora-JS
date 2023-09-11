function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos")
    }
    let suma = num1 + num2
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma es: "+ suma;
    resultadoElement.classList.add("mostrar");
    if(suma > 10){
        resultadoElement.className = "alert alert-success mostrar";
        resultadoElement.style.visibility = "visible";
    } else {
        resultadoElement.className = "alert alert-danger mostrar"; 
        resultadoElement.style.visibility = "visible";
    }
}
function restar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos")
    }
    let resta = num1 - num2
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La resta es: "+ resta;
    resultadoElement.classList.add("mostrar");
    if(resta > 10){
        resultadoElement.className = "alert alert-success mostrar";
        resultadoElement.style.visibility = "visible";
    } else {
        resultadoElement.className = "alert alert-danger mostrar"; 
        resultadoElement.style.visibility = "visible";
    }
}
function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos")
    }
    let multi = num1 * num2
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La multiplicación es: "+ multi;
    resultadoElement.classList.add("mostrar");
    if(multi > 10){
        resultadoElement.className = "alert alert-success mostrar";
        resultadoElement.style.visibility = "visible";
    } else {
        resultadoElement.className = "alert alert-danger mostrar"; 
        resultadoElement.style.visibility = "visible";
    }
}
function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa un número válido en ambos campos")
    }
    let div = num1 / num2
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La división es: "+ div;
    resultadoElement.classList.add("mostrar");
    if(div > 10){
        resultadoElement.className = "alert alert-success mostrar";
        resultadoElement.style.visibility = "visible";
    } else {
        resultadoElement.className = "alert alert-danger mostrar"; 
        resultadoElement.style.visibility = "visible";
    }
}
function Limpiar(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.style.visibility = "hidden";
}
document.getElementById("sumarBtn").addEventListener("click",sumar);
document.getElementById("restarBtn").addEventListener("click",restar)
document.getElementById("multiBtn").addEventListener("click",multiplicar)
document.getElementById("diviBtn").addEventListener("click",dividir)
document.getElementById("clearBtn").addEventListener("click",Limpiar)