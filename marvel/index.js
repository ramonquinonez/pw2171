const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");


var buscarPersonaje=function(){
	var personaje = $("#txtPersonaje").val();
	var url="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	var cantidadComics=0;
	var cadenaComics="";

	if(personaje==""){
		alert("Ingrese un personaje")
		$("#txtPersonaje").focus();
		return //ya no continua con la funcion
	}
	url=url+personaje;
	$.ajax({
		dataType:"json",
		url: url, 
		success:function(response){
			if(response.code==200){//ok.cat
			$("#imgFoto").show("slow");
			$("#imgFoto").attr("scr",response.data.results[0].thumbnail.path+"."+
									 response.data.results[0].thumbnail.extension)
			$("#txtDescripcion").html("")
			$("#txtNombre").html(response.data.results[0].name)
			if(response.data.results[0].description!=""){
			$("#txtDescripcion").html("Description: </b>"+response.data.results[0].description)
		}
			cantidadComics=response.data.results[0].comics.returned;
			for(var i=0; i<cantidadComics;i++)
			cadenaComics+=response.data.results[0].comics,items[i].name+"<br>";
			}
			$("#txtComics").html(cadenaComics);
	})
}
//posiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus();
//evento del boton buscar
$("#btnBuscar").on("click",buscarPersonaje);
