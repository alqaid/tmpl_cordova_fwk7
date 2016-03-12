var app = {
    initialize: function() {
        this.bindEvents();
    },
   
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
       $("#boton_enviar").click(function(){
           cambioPagina();
       })
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

/**
 * mis funciones....... obtiene datos del servidor mediante json
 */
function cambioPagina(){    
     window.location.href="mnu_inicio.html";  
         
};

function obtenerDatosWeb(){
       window.location.href="mnu_inicio.html";
       
    var email = $("#email").val();
    var pass = $("#pass").val();
	
	var arrayEnvio = new Object(); //<!-- Construimos un objeto con la informaci�n a enviar -->
    arrayEnvio['accion'] = "logearse";
    arrayEnvio['alqusuario'] = email;
    arrayEnvio['alqpassword'] = pass;
    
    $.ajax({ //<!-- Comenzamos la funci�n con ajax -->
        type: "POST",// <!-- Enviamos los datos por POST -->
        data: arrayEnvio, 
        url: 'http://farmacos.alcaide.info/json/validar.php',
        success: function(data) { 
        var jsnDevuelto = jQuery.parseJSON(data); 
         if(jsnDevuelto.estado != 1){ //<!-- Si el PHP ha devuelto alg�n error controlado por nosotros -->
                 $("#idPanelPie").html("Error de conexion." + jsnDevuelto.error_msg);
            }else{
                // SI CONEXI�N OK
              
                 
                 window.location.href="drg_buscar.html";                  
                //  FIN  CONECTADO
			}
        },
        error: function(e){ //<!-- Si no ha podido conectar con el servidor -->
            alert("Error en el servidor, por favor, intentalo de nuevo mas tarde");
        }
    });// <!-- fin ajax -->
	 
}

 