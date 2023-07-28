"use strict"

const btnNav = document.querySelector("#btn-nav");
const nav = document.querySelector("#nav-links");

btnNav.addEventListener("click", menu)

function menu() {
    btnNav.classList.toggle("btn-rotation");
    nav.classList.toggle("nav-open");
}

let btnDerecha = document.querySelector("#btn-der").addEventListener('click', ()=>{
    let x = true;
    moverImagen(x);
});
let btnIzquierda = document.querySelector("#btn-izq").addEventListener('click', ()=>{
    let x = false;
    moverImagen(x);
});
let galeria = document.querySelector('#galeria');
let contador = 1;

function moverImagen(x){
    if(x === true){        
        if(contador < 14){
            contador++;
        }
    }
    else if(x === false){        
        if(contador > 1){
            contador--;
        }
    }
    galeria.innerHTML = "";
    galeria.innerHTML = `<img src="./img/casa/img${contador}.jpg" alt="imagen de la residencia">`;
}