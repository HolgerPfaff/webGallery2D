	(function () {

	    // Function which creates a spinner and adds it to the given div
	    var createSpinner = function (div) {

	            var outer = $('<div></div>')
	                .addClass('gaCentered');

	            var spinner = $('<div></div>')
	                .addClass('preloader-wrapper small active')
	                .append(
	                    $('<div></div>')
	                    .addClass('spinner-layer spinner-yellow-only')
	                    .append(
	                        $('<div></div>')
	                        .addClass('circle-clipper left')
	                        .append(
	                            $('<div></div>')
	                            .addClass('circle')))
	                    .append(
	                        $('<div></div> ')
	                        .addClass('gap-patch')
	                        .append(
	                            $('<div></div>')
	                            .addClass('circle')))
	                    .append(
	                        $('<div></div>')
	                        .addClass('circle-clipper right')
	                        .append(
	                            $('<div></div>')
	                            .addClass('circle'))));

	            outer.append(spinner);
	            div.append(outer);

	            // Creates the following HTML which shows the spinner
	            /*
	            	<div class="preloader-wrapper small active">
	            		<div class="spinner-layer spinner-green-only">
	            			<div class="circle-clipper left">
	            				<div class="circle"></div>
	            			</div>
	            			<div class="gap-patch">
	            				<div class="circle"></div>
	            			</div>
	            			<div class="circle-clipper right">
	            				<div class="circle"></div>
	            			</div>
	            		</div>
	            	</div>			
	            */
	        },

	        // Function which removes the spinner from the given div
	        removeSpinner = function (div) {
	            div.children('.gaCentered').remove();
	        },

	        // Function which converts the preview-image-url to the URL of the big image
	        getFullImageSource = function ($image) {
	            var url = $image.attr('src');
	            return url.replace(/-sm/g, "");
	        },

	        // Function which adds a spinner to the given image, 
	        // loads the main-image in the background, removes the spinner when ready 
	        // and adds the lightbox-feature
	        downloadImage = function ($image) {
	            var $downloadingImage,
	                $div = $image.parent();


	            // add spinner
	            createSpinner($div);

	            // create a new image which is not added to the HTML and use it to load the full-size image
	            $downloadingImage = $("<img>");
	            $downloadingImage.on("load", function () {

	                $(this).addClass('gaImage gaImageOverlay');

	                $div.append($(this));

	                // Remove the spinner
	                removeSpinner($div);

	                // Add lightbox
	                $(this).addClass('materialboxed');
	                $(this).materialbox();
	            });

	            // Start the loading of the full-size-image
	            $downloadingImage.attr('src', getFullImageSource($image));
	        },


	        // Function which loads all images with the css-class 'gaImageBox'
	        loadImages = function () {
	            var $images = $('div.gaImageBox img');
	            $images.each(function () {
	                downloadImage($(this));
	            });
	        },

	        checkFields = function () {
	            var errorMsg = '';
	            $("form label input").each(function () {
	                if ($(this).val().length === 0) {
	                    var n = $(this).parent("label").text().trim();
	                    errorMsg = errorMsg.concat('Das Feld "', n, '" muss ausgefüllt werden.<br/>');
	                }
	            });

	            if ($("form label textarea").val().length === 0) {
	                errorMsg = errorMsg.concat('Die Nachricht fehlt noch.<br/>');
	            }

	            if (errorMsg.length > 0) {
	                Materialize.toast("Das Formular ist nicht vollständig ausgefüllt.<br/><br/>".concat(errorMsg), 4000, "orange");
	                return false;
	            }

	            return true;
	        },

	        sendMail = function () {
	            if (!checkFields()) {
	                return;
	            }

	            var request = $.ajax({
	                url: "mail.php",
	                method: "POST",
	                data: $("#mailForm").serialize(),
	                dataType: "html"
	            });

	            request.done(function (msg) {
	                Materialize.toast(msg, 4000);
	            });

	            request.fail(function (jqXHR, textStatus) {
	                Materialize.toast("Fehler beim Senden der Nachricht: " + textStatus, 6000, "red");
	            });
	        };

	    // Entry point.                
	    $(document).ready(function () {
	        //$('#media').hide(); // Use when 'media' is not hidden with css
	        $('#loading').fadeIn(500);
	        $('#noJSWarning').remove();
	        $('.button-collapse').sideNav();
	        $('.parallax').parallax();
            $('#mailButton').click(sendMail);
	    });

	    $(window).on("load", function () {
	        $('#loading').hide();
	        // Exchange all preview-images through full images
	        loadImages();
	        $('#media').fadeIn(3500);
	        $('.parallax').parallax();

	    });

	})();