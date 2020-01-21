(function(){
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){
        // CREAMOS LAS VAARIABLES
        var nombre = document.getElementById('nom');
        var    telefono = document.getElementById('te');
         var   correo = document.getElementById('cor');
         var   mensaje = document.getElementById('men');
         var enviar = document.getElementById('submit');

         var errorNombre = document.getElementById('errorNombre');
         var errorTelefono = document.getElementById('errorTelefono');
         var errorCorreo = document.getElementById('errorCorreo');
         var errorMensaje = document.getElementById('errorMensaje');
        

        // CREAMOS LOS EVENTOS
         nombre.addEventListener('blur', validarCampos);
         telefono.addEventListener('blur', validarCampos1);
         correo.addEventListener('blur', validarCampos2);
         mensaje.addEventListener('blur', validarCampos3);
         correo.addEventListener('blur', comprobarArroba);

        

         function validarCampos(){
             if(this.value == '' || this.value == ' '){
                 errorNombre.style.display = 'block';
                 errorNombre.innerHTML = '* Este campo es obligatorio';
                 this.style.border = '1px solid orange';
                 
             }
             else {
                 this.style.border = '1px solid green';
                 errorNombre.style.display = 'none';
             }
         };

        function validarCampos1(){
            if(this.value == '' || this.value == ' '){
                errorTelefono.style.display = 'block';
                errorTelefono.innerHTML = '* Este campo es obligatorio';
                this.style.border = '1px solid orange';
            }
            else {
                this.style.border = '1px solid green';
                errorTelefono.style.display = 'none';
            }
        };

        function comprobarArroba(){
            if(this.value.indexOf('@') > -1){
                this.style.border = '1px solid green';
                errorCorreo.style.display = 'none';
            } else{
                errorCorreo.style.display = 'block';
                errorCorreo.innerHTML = '* Debe introducir almenos una @';
                this.style.border = '1px solid red';
            }
        }

         function validarCampos2(){
             if(this.value == '' || this.value == ' '){
                 errorCorreo.style.display = 'block';
                 errorCorreo.innerHTML = '* Este campo es obligatorio';
                 this.style.border = '1px solid orange';
             }

             else {
                 this.style.border = '1px solid green';
                 errorCorreo.style.display = 'none';
             }
         };

         function validarCampos3(){
             if(this.value == '' || this.value == ' '){
                 errorMensaje.style.display = 'block';
                 errorMensaje.innerHTML = '* Este campo es obligatorio';
                 this.style.border = '1px solid orange';
             }
             else {
                 this.style.border = '1px solid green';
                 errorMensaje.style.display = 'none';
             }
         };


        // Creamos las funciones

        console.log('funciona');
    });//TERMINA EL EVENTO QUE CARGA LAS PAGINAS

})();