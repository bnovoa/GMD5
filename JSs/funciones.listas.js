// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++ Ayuda para funciones listas +++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Aqui encontraras funciones listas para llegar y agregarlas como tu quiras
// y personalizar a tu gusto el generador de MD5 solo agregalas al archivo script.js
// Son solo 6 pero de algo sirven




	// 1) Funciona muestra el resultado por alert.
	$("#resultado").click(function(){
		alert($.md5($("#datos").val()));
	});



	// 2) Se va Generando automanticamente cuando oprima una tecla.
	$("#datos").keyup(function(){
		$("#respuesta").text($.md5($("#datos").val()));
	});



	// 3) Cuando haga doble click se copiara en la portapapelera.
	$("#respuesta").dblclick(function(){
		$("#respuesta").zclip({
			path:'./librerias/JSs/ZeroClipboard.swf',
			copy:function(){
                return $("#respuesta").val();
            }
		});
		alert("Se ha copiado correctamente");
	});




	// 4) Se Gerar&aacute; cuando oprima la tecla "ENTER".
	$("#datos").keydown(function(event){
		if(event.which == "13"){
			$("#respuesta").text($.md5($("#datos").val()));
			// alert($.md5($("#datos").val()));
		}
	});



	// 5) 
	$("a#copiar-enlace").click(function(){
        if($("#respuesta").text()==""){
            alert("Tiene que ingresar un dato en el campo");
        }else{

        }
        return false;
    });



	// 6) 
    $("#respuesta").zclip({
        if($("#respuesta").text()==""){
            alert("Tiene que ingresar un dato en el campo");
        }else{
        	path:'./librerias/JSs/ZeroClipboard.swf',
        	copy:function(){
        	    return $("#respuesta").val();
        	}
        }
    });