$(document).ready(function() {
	
	/*$.fn.fullpage({

		anchors: ['page1', 'page2', 'page3', 'page4'],
		
		menu: '#home-nav',
		
		'afterLoad': function(anchorLink, index){
			
			  if(index == 1){ 
				
					$('body').removeClass('fixhead');
					
			   }else {
					
					$('body').addClass('fixhead');
					
			   }
			   
			   if(index == 4){ 
				
					$('.home-footer').show();
					
			   }else {
					
					$('.home-footer').hide();
					
			   }
			
		}
		
	});*/
	
	//  ========== 
	//  = CONTENT = 
	//  ========== 
	function resetContainerHeight(){
			
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var headerHeight = $(".header").height();
		var headerHeadHeight = $(".header-head").height();
		var footHeight = $(".footer").height();
		
		if(windowWidth>1000){
			$(".pc-wrap").css("paddingTop",headerHeight);
		}else {
			$(".pc-wrap").css("paddingTop",0);
		}
		
		
		
	}
	resetContainerHeight();
	
	$(window).resize(function(){
		resetContainerHeight();
	})
	
	
	$(window).scroll(function () {
        var winTop = $(window).scrollTop(), 
            winh = $(window).height(),
            headHeight = $(".header").innerHeight(),
            bannerHeight = $(".home-banner").height(),
            proTopHeight = $(".home-pro").offset().top;
            
        //HOME HEAD
        if(winTop>=headHeight){
        	$("body").addClass("fixhead")
        }else {
        	$("body").removeClass("fixhead")
        }
        
    })
	
	/*NAV SLIDE*/
	$(".nav ul li").hover(function(){ 
		$(this).find(".nav-slide").stop().fadeIn();
	},function(){
		$(this).find(".nav-slide").stop().fadeOut();
	})
	
	//FIX NAV
	$('#home-nav').onePageNav();
	
	
	//BANNER
	$('.slick-1').slick({
		dots: true,
		arrows: true,
		autoplay:true,
		slidesToShow:1,
		slidesToScroll:1
	});
	
	
	//TAB
	$(".js-tab-box").each(function(i){
		$(this).attr("id","js-tab-box-"+i);
	})
	
	$(".js-tab").each(function(i){
		$(this).attr("id","js-tab-"+i);
		
		$(this).children("span").click(function(){
		
			$(this).addClass("active").siblings().removeClass("active");
			
			var index = $(this).index(); 
			
			$("#js-tab-box-"+i).find(".js-tab-con").eq(index).addClass("active").siblings().removeClass("active");
			
		})
	})

	//PRO
	$(".js-pro-slick").each(function(i){
		$(this).attr("id","js-pro-slick-"+i);
	});
	
	$(".js-home-pro-des").each(function(i){
		$(this).attr("id","js-home-pro-des-"+i);
	});
	
	$(".js-pro-slick").each(function(i){
		$(this).slick({
			dots: true,
			arrows: true,
			autoplay:false,
			slidesToShow:1,
			slidesToScroll:1,
			onAfterChange:function(){
				
					var proCurrentIndex = $('#js-pro-slick-'+i).slickCurrentSlide();
					
		  			$("#js-home-pro-des-"+i).addClass("aa").find(".js-con").eq(proCurrentIndex).show().siblings().hide();
		  }
		});
	});
	
	
	
	//FOOD
	$('.loop-1').owlCarousel({
	  	nav:true,
	  	dots:false,
	    center: true,
	    autoplay: false,
	    smartSpeed: 400,
	    items: 2,
	    loop: true,
	    margin: 18,
	    autoPlay: 300
	});
	
	
	//  ========== 
	//  = MOBILE MENU = 
	//  ========== 
	var windowHeight = $(window).height(),
		mbHeadHeight = $(".mb-head").innerHeight();
		
	$(".js-mb-menu").css({"height":(windowHeight-mbHeadHeight),"top":mbHeadHeight});
	
	$(".js-mb-nav").click(function(){
		
		if (!$(this).hasClass("active")) {
			$(this).addClass("active");
			$(".js-mb-menu").animate({"left":"0"},200);
		}else {
			$(this).removeClass("active");
			$(".js-mb-menu").animate({"left":"100%"},200);
		}
		
	});
	
	$(".js-mb-menu li").each(function(){
		var menuSlide = $(this).children(".menu-slide");
		var menuSlideDown = $(this).find(".menu-slide-down");
		
		if(menuSlide.length){
			menuSlide.prev().addClass("js-slide-bar haschild default");
		};
		
		if(menuSlideDown.length){
			menuSlideDown.prev().addClass("js-slide-subbar default");
		};
	});
	
	$(".js-slide-bar").click(function(){
		if ($(this).next(".menu-slide").css("display") == "none") {
			$(this).next(".menu-slide").slideDown(200).parent().siblings().find(".menu-slide").slideUp(200);;
			$(this).removeClass("default").addClass("active").parent().siblings().children(".haschild").removeClass("active").addClass("default");
		}else{
			$(this).next(".menu-slide").slideUp(200);
			$(this).removeClass("active").addClass("default");
		}
	});
	
	$(".js-slide-subbar").click(function(){
		if ($(this).next(".menu-slide-down").css("display") == "none") {
			$(this).next(".menu-slide-down").slideDown(200).siblings(".menu-slide-down").slideUp(200);;
			$(this).addClass("active").siblings("a").removeClass("active");
		}else{
			$(this).next(".menu-slide-down").slideUp(200);
			$(this).removeClass("active");
		}
	})
	
	//MOBILE BANNER
	$('.slick-2').slick({
		dots: true,
		arrows: false,
		autoplay:true,
		slidesToShow:1,
		slidesToScroll:1
	});
	
	//  ========== 
	//  = MOBILE FOOD = 
	//  ========== 
	$('.loop-2').owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        nav:true,
	  	dots:false
      });
      
    //  ========== 
	//  = BACK TOP = 
	//  ==========
	$(".back-top").click(function(){
    	$('html,body').animate({scrollTop:0},500); 
    })
});