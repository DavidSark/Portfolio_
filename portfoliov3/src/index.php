<?php
// Récupère les données du formulaire
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Crée le corps du message
$corps_message = "Nom : $nom\n\nAdresse e-mail : $email\n\nMessage :\n$message";

// Envoie l'e-mail
$destinataire = "david.sarkissiann@gmail.com";
$sujet = "Nouveau message de formulaire de contact";
$headers = "From: $email\r\nReply-To: $email\r\n";
mail($destinataire, $sujet, $corps_message, $headers);

// Redirige l'utilisateur vers une page de confirmation
header("Location: confirmation.html");
?>