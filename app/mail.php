<?php    

    session_start();
    function nobot($timegap)
    {
        if (isset($_SESSION['user_time']) && $_SESSION['user_time'] != '') {
            $time = (time() - $timegap) - $_SESSION['user_time'];
            if ($time >= 0) {
                $timecheck = "TRUE";
            }
        } else {
            $timecheck = "FIRSTTIME";
        }
               
        $_SESSION['user_time'] = time(); //time user loaded last page
        
        return isset($timecheck);
    }

    if(nobot(10)) {

        $sender = $_POST["sender"];
        $header = $_POST["title"];        
        $text =  wordwrap($_POST["message"], 70);
       
        if(mail("webmaster@holger-pfaff.de", $header, "Absender: $sender\n\n$text")) {
            echo("Die Nachricht wurde gesendet.");   
        } else {
            echo("Die Nachricht konnte nicht gesendet werden..."); 
        }
        
        
        
    } else {
        echo("Das Senden von Mails ist pro Benutzer nur alle 10 Sekunden gestattet.");
    }
?>