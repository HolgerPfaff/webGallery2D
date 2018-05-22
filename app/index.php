<?php        
        session_start();
?>
<!DOCTYPE html>
<html lang="de">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0" />
    <meta name="keywords" content="Kunst, Acryl, Hameln, Bad Münder, 3D, Malen, Galerie">
    <meta name="description" content="Die Acrylbilder von Holger Pfaff">
    <title>Bilder von Holger Pfaff</title>

    <!-- CSS  -->
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection" />
    <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection" />
</head>

<body>
    <header>
        <nav class="top-nav grey darken-4">
            <div class="container">
                <div class="nav-wrapper">
                    <a class="page-title grey-text text-lighten-1">Holger Pfaff<span class="titleSuffix hide-on-small-only"> Bilder</span></a>
                </div>
            </div>
        </nav>
    </header>
    
    <main>
        <?php        
            include('loading.php');
        ?>

        <div id="media">
            <?php        
                include('parallax1.php');
            ?>

            <?php        
                include('images.php');
            ?>


            <div class="parallax-container hide-on-small-only">
                <div class="parallax"><img src="images/img-18.jpg"></div>
            </div>
         
        </div>
    </main>
    
    <footer>
        <?php        
            include('footer.php');
        ?>
    </footer>
    <!--  Scripts-->
    <script src="js/jquery-2.2.4.min.js"></script>
    <script src="js/materialize.js"></script>
    <script src="js/gallery.js"></script>
</body>

</html>