function guardarDatos() {
  localStorage.nombre =  document.getElementById("nombre").Value; 
  localStorage.password = document.getElementById("password").Value; 
}

function recuperarDatos(){
   if ( (localStorage.nombre != undefined) &&  (localStorage.password != undefined) ) {
        document.getElementById("datos").innerHTML = "Nombre: " +localStorage.nombre +"<br> password: " +localStorage.password;
   } else{
        document.getElementById("datos").innerHTML = "No has ingresado tu nombre y password";
     }
}  

function borrarDatos(){
    localStorage.clear();
    document.getElementById("datos").innerHTML = "Ingresa nombre y password";
    
    document.getElementById("nombre").Value = "";
    document.getElementById("password").Value = "";

}