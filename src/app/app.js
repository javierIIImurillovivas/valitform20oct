 var nombre = document.getElementById('nombre');
 var password = document.getElementById('password');
 var error = document.getElementById('error');


var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajeserror = [];
     
    if(nombre.value === null || nombre.value === ''){
        mensajeserror.push('Ingrese su Nombre de Usurio : ');   
    }
    if(password.value === null || password.value === ''){
        mensajeserror.push('Ingrese su Password');
    }
    error.innerHTML = mensajeserror.join(', ');
    return false;

    });