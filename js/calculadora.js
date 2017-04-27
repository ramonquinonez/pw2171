//variable global
var operador="";

function borrar(){
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}

function operadores(ope){
	operador=ope;
}
function igual(){
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;
	if(operador=="+"){
		document.calculadora.resultado.value=(valor1)+(valor2);
	}
	if(operador=="-"){
		document.calculadora.resultado.value=(valor1)-(valor2);
	}
	if(operador=="/"){
		document.calculadora.resultado.value=(valor1)/(valor2);
	}
	if(operador=="*"){
		document.calculadora.resultado.value=valor1)*(valor2);
	}
}
}

function numeros(num){
	if(operador == ""){
		var valorinicial=document.calculadora.operando1.value;
		if(valorinicial=="0"){
			document.calculadora.operando1.value="";
		}
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
	}
	else{
		if(operador == ""){
		var valorinicial=document.calculadora.operando2.value;
		if(valorinicial=="0"){
			document.calculadora.operando2.value="";
		}
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
	}
	}
}