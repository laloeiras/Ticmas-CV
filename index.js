/* alert ("asd") */
const datos = document.querySelector("#datos")
const boton_nombre = document.querySelector("#nombre")
const boton_email = document.querySelector("#e-mail")
const boton_dire = document.querySelector("#dire")
const boton_cumple = document.querySelector("#cumple")
const boton_telefono = document.querySelector("#telefono")
const boton_habilidades = document.querySelector("#habilidades")
const boton_experiencia = document.querySelector("#experiencia")
const boton_estudios = document.querySelector("#estudios")
console.log(datos)
/* datos.innerHTML = "cualquier cosa" */
boton_nombre.addEventListener("click",function(){
    datos.innerHTML = "Willier Turner"
})

boton_email.addEventListener("click",function(){
    datos.innerHTML = "willie.turner@ejemplo.com"
})
boton_dire.addEventListener("click",function(){
    datos.innerHTML = "5156 W Sherman Dr"
})
boton_cumple.addEventListener("click",function(){
    datos.innerHTML = "2/6/1949"
})
boton_telefono.addEventListener("click",function(){
    datos.innerHTML = "(865) 259-9275"
})
boton_habilidades.addEventListener("click",function(){
    datos.innerHTML = "manejo de office"
})
boton_experiencia.addEventListener("click",function(){
    datos.innerHTML = "ayudante de albañil<br> ayudante de cocina"
})
boton_estudios.addEventListener("click",function(){
    datos.innerHTML = "primario completo EEB Sarmiento <br> secundario completo EES Sarmiento"
})