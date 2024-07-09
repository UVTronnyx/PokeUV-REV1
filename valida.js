var nombre = document.getElementById('nombre');
var contra = document.getElementById('contra') 
var error = document.getElementById('error');
error.style.color= 'red'
var form = document.getElementById("formulario");

form.addEventListener('submit',function(evt){ //recibe como argumento el evento(*) tipo submit, y una función que se ejecuta cuando el evento ocurre.
    evt.preventDefault(); //para no enviar el formulario
    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
            mensajesError.push('Ingresa nombre');
        }    
    if(contra.value === null || contra.value === ''){        
            mensajesError.push(' Ingresa contraseña');    
        }
    error.innerHTML = mensajesError;
});

onclick.apply