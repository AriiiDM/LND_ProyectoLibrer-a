function ocultarMostrarVideo(){
if(document.getElementById("video").className=="mostrar")
{
document.getElementById("video").className="ocultar";
document.getElementById("boton").innerText="Mostrar vídeo";
}
else
{
document.getElementById("video").className="mostrar";
document.getElementById("boton").innerText="Ocultar vídeo";
}
}