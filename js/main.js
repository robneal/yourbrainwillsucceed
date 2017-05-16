jQuery(document).ready(function($){
	
	console.log("js is (t)werking");
	$('.nojs').hide();  // To solve my with problem I can add the class large at width 960px and run all my js on .large 
	
	

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



	// SCROLLING EFFECTS FOR STORY PAGE
	if( document.getElementById('story') != null ){
	  	
	  	$('#story .container .fadeInSection').addClass('fadeOut-right');

		// Parallax Effect for when user scrolls page vertically 
	    $(window).scroll(function(){
			
			// Delare variables
			var pixScrolled = $(this).scrollTop(); 

			var $visualText = $("#visualLead .container"); 
			var $scaleBy = pixScrolled / 10100 +1 ;
			var $storyContainer =$("#story .container"); 
			// Debuging 
			//console.log(pixScrolled); 
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
				//console.log("hope"); 
			    $('#story .container .hope').addClass('fadeIn-left');
	  		}else{
	  			$('.hope').removeClass('fadeIn-left');
	  		}

	  		// Story Section - Guidance Section ade In/Fade Out
			if(pixScrolled > $('.hope').offset().top - 60 ){ 
				//console.log("guidance"); 
			    $('#story .container .guidance').addClass('fadeIn-left');
	  		}else{
	  			$('.guidance').removeClass('fadeIn-left');
	  		}

	  		// Story Section - Community Section fade In/Fade Out
	  		if(pixScrolled > $('.guidance').offset().top - 60 ){
				//console.log("Community"); 
			    $('#story .container .community').addClass('fadeIn-left');
	  		}else{
	  			$('.community').removeClass('fadeIn-left');
	  		}


	  		//	Main Menu Nav Links Styling
	  		
	  		var $mainMenuLinks = $('.mainMenu a');
	  		
	  		$mainMenuLinks.click( function(){
	  			console.log ('Clicked a'); 
	  			$('#hbMenu').prop('checked', false);
	  		}); 	

	  		//var $homeLink = $('.mainMenu a:nth-child(1)');
	  		var $storyLink = $('.mainMenu a:nth-child(1)');
	  		var $teamLink = $('.mainMenu a:nth-child(2)');
	  		var $contactLink = $('.mainMenu a:nth-child(3)');
	  		
	  		
			if ((pixScrolled > $('#story').offset().top - 60) && (pixScrolled <= $('#team').offset().top - 60)){
	    		//$homeLink.removeClass('menuBottom');
	    		$teamLink.removeClass('menuBottom');
				$contactLink.removeClass('menuBottom');

	    		$storyLink.addClass('menuBottom');

			}else if((pixScrolled > $('#team').offset().top - 60) && (pixScrolled <= $('#contact').offset().top - 60)){
				//$homeLink.removeClass('menuBottom');
				$storyLink.removeClass('menuBottom');
				$contactLink.removeClass('menuBottom');

				$teamLink.addClass('menuBottom');

			}else if((pixScrolled > $('#team').offset().top - 60)){
				//$homeLink.removeClass('menuBottom');
				$storyLink.removeClass('menuBottom');
				$teamLink.removeClass('menuBottom');

				$contactLink.addClass('menuBottom');
			}
		});// window.scroll()
	}



	// COUNTDOWN FOR BOOK PAGE
	var end = new Date('07/24/2017 8:00 AM');
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = 
        	'<li class="days countdownSection "><span id="dayCount" class="count">'
        	+ days + '</span><span class="title">Days</span></li>';

        // document.querySelector('.countdown.days.count').innerHTML = days + 'days ';
       
        document.getElementById('countdown').innerHTML += 
        	'<li class="hours countdownSection "><span id="hourCount" class="count">'
        	+ hours + '</span><span class="title">Hours</span></li>';

        
        document.getElementById('countdown').innerHTML += 
        	'<li class="minutes countdownSection "><span id="minsCount" class="count">'
        	+ minutes + '</span><span class="title">Minutes</span></li>';

        document.getElementById('countdown').innerHTML += 
        	'<li class="seconds countdownSection "><span id="secsCount" class="count">'
        	+ seconds + '</span><span class="title">Seconds</span></li>';
    }
    
    if( document.getElementById('bookStory') != null ){
        timer = setInterval(showRemaining, 1000);
    }

	
});










