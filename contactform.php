<?php

if (isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $subject = $_POST['subject'];

    $mailTo = "woodrow.thompson.iii@gmail.com"
    $headers = "From: ".$firstname.$lastname;
    $txt = "You have recieved and e-mail from ".$firstname.".\n\n".$subject;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");
}