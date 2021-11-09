"use strict"

let espacio = document.getElementById('infoPlace')
let botonMostrar = document.getElementById('show')
let persona = [];



let btnSubmit = document.getElementById('btn-submit');






btnSubmit.addEventListener("click",()=>{

    let nombres = document.getElementById('name').value;
    let apellidos = document.getElementById('surname').value;
    let mail = document.getElementById('email').value;

    let varios = {Nombre:nombres,Apellido:apellidos,Email:mail}

    persona.push(varios)
    alert("Gracias nos pondrenmos en contacto")
    console.log(persona)
})


botonMostrar.addEventListener("click",()=>{
espacio.innerHTML += `<p>${persona}</p>`;   
})


