$(document).ready(function() {
	$("#datos").focus();

	// Se Generar&aacute; cuando haga click en el boton "Generar".
	$("#resultado").click(function(){
		$("#respuesta").text($.md5($("#datos").val()));
	});
   
    $("#copiar").zclip({
        path: './librerias/JSs/zclip/ZeroClipboard.swf',
        copy: $("#respuesta").val(),
        aftercopy: function() {
            // console.log('copiado');
            alert("El valor fue copiado")
        }
    });
});