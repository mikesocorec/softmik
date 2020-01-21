<?php
        // Declaracion de variables
        $nombre = $_POST[nombre];
        $telefono = $_POST[telefono];
        $correo = $_POST[correo];
        $mensaje = $_POST[mensaje]; 
        $noticia = $_POST[noticia];
        $email = 'mikesocorec@gmail.com';
        $para = $email;
        
        $titulo = 'Solicitud de contacto';
        $header = 'From: '. $email;
        $msjCorreo = "Nombre: $nombre\n Telefono: $telefono\n Correo: $email Mensaje: $mensaje Noticia: $noticia";
        if ($_POST['enviar']){
                if($correo == ''){
                        echo "<script>
                        alert('Fallo el envio correo vacio ');
                        </script>";
                }
                if(mail($para, $titulo, $msjCorreo, $header)){
                        echo "<script>
                        alert('mensaje Enviado, muchas gracias por contactar con nosotros.');
                        </script>";
                } else{
                        echo "<script>
                        alert('Fallo el envio');
                        </script>";
                }
        }

    
?>