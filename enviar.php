<?php
    if (isset($_POST[enviar])) {
        $nombre = $_POST[nombre];
        $telefono = $_POST[telefono];
        $correo = $_POST[correo];
        $mensaje = $_POST[mensaje]; 
        $noticia = $_POST[noticia];
        

       echo "nombre: = $nombre <br>";
       echo "telefono: = $telefono <br>";
       echo "correo: = $correo <br>";
       echo "mensaje: = $mensaje <br>";
       echo "mensaje: = $noticia <br>";
    }
?>