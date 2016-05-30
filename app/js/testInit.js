

	(function()	{
		
		
		var createSpinner = function(div) {
			
			var outer = $('<div></div>')
				.addClass('gaCentered');
			
			var spinner = $('<div></div>')
			.addClass('preloader-wrapper small active')
			.append(			
				$('<div></div>')
				.addClass('spinner-layer spinner-green-only')
				.append(
					$('<div></div>')
					.addClass('circle-clipper left')
					.append(
						$('<div></div>')
						.addClass('circle')))
				.append(
					$('<div></div>')
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
		
		removeSpinner = function(div) {
			$('.gaCentered').remove();
		},
		
		getFullImageSource = function($image){
			var url = $image.attr('src');
			return url.replace(/-sm/g, "");
		},
		
		downloadImage = function($image) {
			var $downloadingImage;
			
			//$image.height(200);
			createSpinner($image.parent());
			$downloadingImage = $("<img>");
			$downloadingImage.attr('src', getFullImageSource($image)); 
			
			$downloadingImage.load(function(){
				$image.attr("src", $(this).attr("src"));	
				removeSpinner($image.parent());
				//$image.addClass('materialboxed');
			});
		},
		
		
		loadImages = function() {
			var $images = $('div.galleryImageBox img');
			$images.each(function() {								
				downloadImage($(this));				
			});
		};
		
		
		
		
		$(document).ready(function(){
			$('.parallax').parallax();			
			loadImages();
		});
		
	})();	