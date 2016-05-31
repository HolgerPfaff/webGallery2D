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
	            var $downloadingImage;
                
                // add spinner
	            createSpinner($image.parent());
                
                // create a new imgae which is not added to the HTML and use it to load the full-size image
	            $downloadingImage = $("<img>");	            
	            $downloadingImage.load(function () {
                    // Set the loaded image-url to the original image-element
	                $image.attr("src", $(this).attr("src"));
                    
                    // Remove the spinner
                    removeSpinner($image.parent());
                    
                    // Add lightbox
                    $image.addClass('materialboxed');
                    $image.materialbox();	                
	            });
                
                // Start the loading of the full-size-image
                $downloadingImage.attr('src', getFullImageSource($image));
	        },


            // Function which loads all images with the css-class 'galleryImageBox'
	        loadImages = function () {
	            var $images = $('div.galleryImageBox img');
	            $images.each(function () {
	                downloadImage($(this));
	            });
	        };

        // Entry point.
	    $(document).ready(function () {
	        $('.parallax').parallax();
            
            // Exchange all preview-images through full images
	        loadImages();
	    });

	})();