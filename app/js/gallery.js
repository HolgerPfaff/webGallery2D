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
	        };

        // Entry point.                
	    $(document).ready(function () {      
            //$('#media').hide(); // Use when 'media' is not hidden with css
            $('#loading').fadeIn(500);
            $('#noJSWarning').remove();
			$('.button-collapse').sideNav();
	        $('.parallax').parallax();                               	        
	    });
        
        $(window).on("load", function(){
            $('#loading').hide();
            // Exchange all preview-images through full images
            loadImages();
            $('#media').fadeIn(3500); 
            $('.parallax').parallax();
            
        });

	})();