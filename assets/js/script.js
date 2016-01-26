/*

jQuery("document").ready(function($){
  var width_window = $(window).width();
  var height_window = $(window).height();

$('.boutoncompetences').click(function(){
  $('html, body').animate({scrollTop:900},'slow');

});


});
*/

<script>
	$(document).ready(function() {
		$('.part2').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});
</script>
