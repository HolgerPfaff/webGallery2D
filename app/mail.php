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

    if(nobot(5)) {

        $sender = $_POST["sender"];
        $header = $_POST["title"];        
        $text =  wordwrap($_POST["message"], 70);

        $result = "Die Mail wurde doch nicht versendet.";
        if(mail("webmaster@holger-pfaff.de", "$sender : $header", $text)) {
            $result = "OK";
        } 
        
        echo("Die MAIL von $sender mit Betreff  $header wurde wahrscheinlich gesendet.<br/>$result");
        
    } else {
        echo("Sie sind ein BOT!!!!");
    }
?>