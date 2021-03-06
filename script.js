
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

const inputTexto = document.getElementById("input-texto");
const botaoCripto = document.getElementById("btn-cripto");
const botaoDescripto = document.getElementById("btn-descripto");
const botaoCopiar = document.getElementById("btn-copy");
const mensagem = document.getElementById("msg");


botaoCripto.addEventListener('click', function(event){
	event.preventDefault();
	mensagem.value = criptografar(inputTexto.value);
	inputTexto.value = "";
});


botaoDescripto.addEventListener("click", function(event){
	event.preventDefault();
	mensagem.value = descriptogrfar(inputTexto.value);
	inputTexto.value = "";
});

botaoCopiar.addEventListener("click", function(event){
	navigator.clipboard.writeText(document.getElementById("msg").value);
	mensagem.value = "";
});

function criptografar(texto) {
	var codificar = texto.replace(/[i\í]/gi, "imes")
	.replace(/[e\é\ê]/gi, "enter")
	.replace(/[a\á\â]/gi, "ai")
	.replace(/[o\ó\õ]/gi, "ober")
	.replace(/[u\ú]/gi, "ufat");
		return codificar;
}

function descriptogrfar(texto) {
	var decodificar = texto.replace(/enter/gi, "e")
	.replace(/imes/gi, "i")
	.replace(/ai/gi, "a")
	.replace(/ober/gi, "o")
	.replace(/ufat/gi, "u");
	return decodificar;
}