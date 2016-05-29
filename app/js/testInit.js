

	(function()	{
		var idxFull = 0, idxPreview = 1,
		
		imageList = [
			[ 'img-28.jpg', 'img-sm-28.jpg'],
			[ 'img-27.jpg', 'img-sm-27.jpg'],
			[ 'img-26.jpg', 'img-sm-26.jpg'],
			[ 'img-25.jpg', 'img-sm-25.jpg'],
			[ 'img-24.jpg', 'img-sm-24.jpg'],
			[ 'img-23.jpg', 'img-sm-23.jpg'],
			[ 'img-22.jpg', 'img-sm-22.jpg'],
			[ 'img-21.jpg', 'img-sm-21.jpg'],
			[ 'img-20.jpg', 'img-sm-20.jpg'],
			[ 'img-19.jpg', 'img-sm-19.jpg'],
			[ 'img-1.jpg', 'img-sm-1.jpg'],
		],
		
		createSpinner = function(div) {
			
			var oo = $('<div></div>').addClass('center spinner');
			
			var outer = $('<div></div>')
			.addClass('preloader-wrapper small active');
			
			var inner = $('<div></div>')
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
					.addClass('circle')));
					
			outer.append(inner);
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
		
		setPreviews = function() {			
			var $div = $('#imgBox');			
			imageList.forEach(function(e) {				
				$div.append(
					$('<img></img>')
					.attr('src', 'images/' + e[idxPreview])
					.height(200));
				createSpinner($div)	;
			});
		};
		
		
		$(document).ready(function(){
			$('.parallax').parallax();
			//setPreviews();
		});
		
	})();	