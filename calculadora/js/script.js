
// variable donde se guarda la operación actual
let operacion = "";

// elemento donde se muestra el resultado
const pantalla = document.getElementById("resultado");

// mostrar números en la pantalla
function agregarNumero(num){
    if(pantalla.textContent === "0"){
        pantalla.textContent = num;
    }else{
        pantalla.textContent += num;
    }
    operacion += num;
}

// agregar operador (+ - * /)
function agregarOperador(op){
    pantalla.textContent += op;
    operacion += op;
}

// agregar punto decimal
function agregarPunto(){
    pantalla.textContent += ".";
    operacion += ".";
}


// calcular el resultado
function calcular(){
    try{
        const resultado = eval(operacion);
        pantalla.textContent = resultado;
        operacion = resultado.toString();
    }catch{
        pantalla.textContent = "Error";
        operacion = "";
    }
}

// limpiar calculadora
function limpiar(){
    operacion = "";
    pantalla.textContent = "0";
}

// borrar el ultimo numero
function borrarUltimo(){

    if(pantalla.textContent.length > 1){
        pantalla.textContent = pantalla.textContent.slice(0,-1);
        operacion = operacion.slice(0,-1);
    }else{
        pantalla.textContent = "0";
        operacion = "";
    }

}

// eventos de los botones
document.querySelectorAll("button").forEach(boton =>{

    boton.addEventListener("click", ()=>{

        const accion = boton.dataset.action;
        const valor = boton.dataset.val;

        if(accion === "num"){
            agregarNumero(valor);
        }

        if(accion === "op"){
            agregarOperador(valor);
        }

        if(accion === "dot"){
            agregarPunto();
        }

        if(accion === "equals"){
            calcular();
        }

        if(accion === "clear"){
            limpiar();
        }

        if(accion === "delete"){
            borrarUltimo();
        }

    });

});


// soporte para teclado
document.addEventListener("keydown", e =>{

    if("0123456789".includes(e.key)){
        agregarNumero(e.key);
    }

    if(["+","-","*","/"].includes(e.key)){
        agregarOperador(e.key);
    }

    if(e.key === "."){
        agregarPunto();
    }

    if(e.key === "Enter"){
        calcular();
    }

    if(e.key === "Escape"){
        limpiar();
    }

    if(e.key === "Backspace"){
        borrarUltimo(); 
    }

});