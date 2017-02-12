$(document).ready(function(){
	
	console.log("hello World -- Javascript Enabled : -)");


	// Display Hambuger Menu for screen sizes < 960px 
	console.log($( window ).width() + " : Starting Window Width");
	showHamMenu($( window ).width()); 

	// !BUG only checks every two pixels
	$( window ).resize(function() { 
	  // $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
	  console.log($( window ).width());
	  showHamMenu($( window ).width());
	});

	

	function showHamMenu(width){
		if(width < 580){
			// 	Declare variables 
			var $mainMenu = 	$(".mainMenu");
			var $visualLead = 	$("#visualLead");
			var $headerNav = 	$('header');
			var $openHBMenu = 	$(".openHBMenu"); 
			var $closeHbmX = 	$(".closeHbmX"); 


			// 	Steup hamburger menu if js enabled
			$mainMenu.toggleClass( "hideMe" ); // hide mainMenu elements
			$openHBMenu.toggleClass( "hideMe" ); // show hb menu
			
			// Setup fixed nav if js is enabeled
			$headerNav.css({
				'position' : 'fixed'
			});
			$visualLead.css('margin-top', '125px');		


			// Toggle HB Menu when clicked
			$openHBMenu.click( function(){
				console.log("Hamburger Menu Clicked"); 
				$( this ).toggleClass( "hideMe" );
				$mainMenu.toggleClass( "hideMe" );
				$closeHbmX.toggleClass( "hideMe" );
			}); 

			// Toggle X HB Menu when clicked
			$closeHbmX.click( function(){
				console.log("Hamburger Menu X Clicked"); 
				$( this ).toggleClass( "hideMe" );
				$mainMenu.toggleClass( "hideMe" );
				$openHBMenu.toggleClass( "hideMe" );
			}); 
		}else{
			
			var $mainMenu = 	$(".mainMenu");
			var $visualLead = 	$("#visualLead");
			var $headerNav = 	$('header');
			var $openHBMenu = 	$(".openHBMenu"); 
			var $closeHbmX = 	$(".closeHbmX"); 


			// 	
			$mainMenu.removeClass( "hideMe" ); // show mainMenu elements
			$openHBMenu.addClass( "hideMe" ); // hide hb menu
			$closeHbmX.addClass("hideMe"); // hide hb x Menu

			// 
			// $headerNav.css({
			// 	'position' : 'static'
			// });

			// $visualLead.css('margin-top', '0');	 
		}
	}
});