const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");


var buscarPersonaje=function({
	
})
//posiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus();
//evento del boton buscar
$("#btnBuscar").On("click",buscarPersonaje)