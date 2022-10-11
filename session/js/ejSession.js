document.getElementById("crear").addEventListener("click", crear);
document.getElementById("mostrar").addEventListener("click", mostrar);
document.getElementById("modif").addEventListener("click", modif);
document.getElementById("eliminar").addEventListener("click", eliminar);

function crear(){

    sessionStorage.setItem("usuario", "Francisco, Daniel, Xander");
    alert("Se ha creado");


}

function mostrar(){

    alert(sessionStorage.getItem("usuario"));
}

function modif(){
    sessionStorage.setItem("usuario", "Yesenia Escobar");
    alert("Se ha modificado el usuario, puedes verlo en 'Mostrar'");
}

function eliminar(){
    sessionStorage.removeItem("usuario");
    alert("Se ha eliminado");
}