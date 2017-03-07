$(document).ready(function(){
	
	console.log(" Javascript Enabled : Hello World! ");
	// To solve my with problem I can add the class large at width 960px and run all my js on .large 
	
	// Smooth Scroolling on all local anchor links 
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});  

	
	// Typed JS typing text in visualLead 
  //   $(".typingText").typed({
  //   	strings: ["Dumont Innovative Technologies can help.","The road to OCD recovery starts here!" ],
  //       typeSpeed: 75,
        
  //       // time before typing starts
		// startDelay: 5000,
		
		// // backspacing speed
		// backSpeed: 75,

		// // time before backspacing
		// backDelay: 2000,
		
		// // loop
		// loop: true
  //     });
  //   $('.typed-cursor').addClass('hideMe');

	
	// Parallax Effect for when user scrolls page vertically 
    $(window).scroll(function(){
		// Delare variables

		
		var pixScrolled = $(this).scrollTop(); 

		var $visualText =$("#visualLead .container"); 
		var $scaleBy = pixScrolled / 10100 +1 ;
		var $storyContainer =$("#story .container"); 
		// Debuging 
		console.log(pixScrolled); 
		//console.log("ScaleFactor: " + $scaleBy);
		

		// Visual Lead
		
		// $('#visualLead').css({transform: 'scale('+ $scaleBy +','+ $scaleBy+')'}); // Scale leading image
		
		$visualText.css({
			'transform' : 'translate(-50%, ' + (-50 + pixScrolled /3.5) + '%)'
		});
		
		if(pixScrolled > 320){
			$visualText.fadeOut(800);
		}else{
			$visualText.fadeIn(800);
		}


		// Story Section - Hope Section fade In/Fade Out 
		if(pixScrolled > $('#story').offset().top - 60 ){
			$('.mainMenu a:first-child()').addClass('menuBottom');
			console.log("hope"); 
		    $('#story .container .hope').addClass('is-showing');
  		}else{
  			$('.hope').removeClass('is-showing');
  			$('.mainMenu a:first-child()').removeClass('menuBottom');
  		}

  		// Story Section - Guidance Section ade In/Fade Out
		if(pixScrolled > $('.hope').offset().top - 60 ){ 
			console.log("guidance"); 
		    $('#story .container .guidance').addClass('is-showing');
  		}else{
  			$('.guidance').removeClass('is-showing');
  		}

  		// Story Section - Community Section fade In/Fade Out
  		if(pixScrolled > $('.guidance').offset().top - 60 ){
			console.log("Community"); 
		    $('#story .container .community').addClass('is-showing');
  		}else{
  			$('.community').removeClass('is-showing');
  		}

  		var $homeLink = $('.mainMenu a:nth-child(1)');
  		var $storyLink = $('.mainMenu a:nth-child(2)');
  		var $teamLink = $('.mainMenu a:nth-child(3)');
  		var $contactLink = $('.mainMenu a:nth-child(4)');
  		
  		if(pixScrolled  <= $('#story').offset().top - 60){
			$storyLink.removeClass('menuBottom');
			$teamLink.removeClass('menuBottom');
			$contactLink.removeClass('menuBottom');

			$homeLink.addClass('menuBottom');

		}else if ((pixScrolled > $('#story').offset().top - 60) && (pixScrolled <= $('#team').offset().top - 60)){
    		$homeLink.removeClass('menuBottom');
    		$teamLink.removeClass('menuBottom');
			$contactLink.removeClass('menuBottom');

    		$storyLink.addClass('menuBottom');

		}else if((pixScrolled > $('#team').offset().top - 60) && (pixScrolled <= $('#contact').offset().top - 60)){
			$homeLink.removeClass('menuBottom');
			$storyLink.removeClass('menuBottom');
			$contactLink.removeClass('menuBottom');

			$teamLink.addClass('menuBottom');

		}else{
			$homeLink.removeClass('menuBottom');
			$storyLink.removeClass('menuBottom');
			$teamLink.removeClass('menuBottom');

			$contactLink.addClass('menuBottom');
		}


	});// window.scroll()

	



	// Display Hambuger Menu for screen sizes < 960px 
	// console.log($( window ).width() + " : Starting Window Width");
	// showHamMenu($( window ).width()); 

	// // !BUG only checks every two pixels
	// $( window ).resize(function() { 
	//   // $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
	//   console.log($( window ).width());
	//   showHamMenu($( window ).width());
	// });

	// function showHamMenu(width){
		
	// 	// 	Declare variables 
	// 	var $mainMenu = 	$(".mainMenu");
	// 	var $visualLead = 	$("#visualLead");
	// 	var $headerNav = 	$('header');
	// 	var $openHBMenu = 	$(".openHBMenu"); 
	// 	var $closeHbmX = 	$(".closeHbmX"); 

	// 	if(width < 580){
	// 		// 	Steup hamburger menu if js enabled
	// 		$mainMenu.toggleClass( "hideMe" ); // hide mainMenu elements
	// 		$openHBMenu.toggleClass( "hideMe" ); // show hb menu
			
	// 		// Setup fixed nav if js is enabeled
	// 		$headerNav.css({
	// 			'position' : 'fixed'
	// 		});
	// 		$visualLead.css('margin-top', '60px');		


	// 		// Toggle HB Menu when clicked
	// 		$openHBMenu.click( function(){
	// 			console.log("Hamburger Menu Clicked"); 
	// 			$( this ).toggleClass( "hideMe" );
	// 			$mainMenu.toggleClass( "hideMe" );
	// 			$closeHbmX.toggleClass( "hideMe" );
	// 		}); 

	// 		// Toggle X HB Menu when clicked
	// 		$closeHbmX.click( function(){
	// 			console.log("Hamburger Menu X Clicked"); 
	// 			$( this ).toggleClass( "hideMe" );
	// 			$mainMenu.toggleClass( "hideMe" );
	// 			$openHBMenu.toggleClass( "hideMe" );
	// 		}); 
		
	// 	}else{
			
	// 		$mainMenu.removeClass( "hideMe" ); // show mainMenu elements
	// 		$openHBMenu.addClass( "hideMe" ); // hide hb menu
	// 		$closeHbmX.addClass("hideMe"); // hide hb x Menu

	// 		// 
	// 		// $headerNav.css({
	// 		// 	'position' : 'static'
	// 		// });

	// 		// $visualLead.css('margin-top', '0');	 
	// 	}
	// }
});










