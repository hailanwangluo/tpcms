$(function(){
	
	/*导航下拉*/
	$(".nav ul li").hover(function(){ 
		$(this).find(".nav-slide").stop().fadeIn();
	},function(){
		$(this).find(".nav-slide").stop().fadeOut();
	})
	
	//  ========== 
	//  = CONTENT = 
	//  ========== 
	function resetContainerHeight(){
			
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var headHeight = $(".header").height();
		var footHeight = $(".footer").height();
		
		if(windowWidth>1000){
			$(".js-onePage").css("min-height",(windowHeight-headHeight-footHeight));
		}else {
			$(".js-onePage").css("min-height",windowHeight);
		}
		
		
		
	}
	resetContainerHeight();
	
	$(window).resize(function(){
		resetContainerHeight();
	})
	
	
	//  ========== 
	//  = BACK TOP = 
	//  ==========
	$(".back-top").click(function(){
    	$('html,body').animate({scrollTop:0},500); 
    })
	
	//  ========== 
	//  = APPOINT POPUP = 
	//  ========== 
	$(".js-appoint").click(function(){ 
			$(".js-appoint-popup").show();
	})
	
	$(".js-modal-close").on("click",function(){
			$(".js-appoint-popup").hide();
	})
	
	$(".popup-bg").click(function(){
			$(".js-appoint-popup").hide();
	})
	
	
	//  ========== 
	//  = COMPARE POP = 
	//  ========== 
	$(".js-compare").click(function(){
		$(".js-compare-pop").show();
	})
	
	
	//  ========== 
	//  = ALL TAB = 
	//  ========== 
	$(".js-tab-box").each(function(i){
		$(this).attr("id","js-tab-box-"+i);
	})
	
	$(".js-tab").each(function(i){
		$(this).attr("id","js-tab-"+i);
		
		$(this).children().click(function(){
		
			$(this).addClass("active").siblings().removeClass("active");
			
			var index = $(this).index(); 
			
			$("#js-tab-box-"+i).children(".js-tab-con").eq(index).show().siblings().hide();
			
		})
	})
	
	//  ========== 
	//  = PRO_SHOW.HTML = 
	//  ========== 
	$(".js-pro-show-logo dd").click(function(){
        $(".ico_box").show();
        var m = $(".ico_box .box2").height();
        var f = m+150; 
        $(".js-pro-show").css({"height":f})
        return false;
    });
    $(".js-close").click(function(){
        $(".ico_box").hide();
        $(".js-pro-show").css({"height":"auto"})
        return false;
    });

	//  ========== 
	//  = POPUP = 
	//  ========== 
	$(".js-modal-close").click(function(){
			$(".popup-wrap").hide();
	})
	
	$(".popup-bg").click(function(){
			$(".popup-wrap").hide();
	})
	
	
	$(".js-case-item").click(function(){  
			$(".js-case-popup").show();
	})
	
	//  ========== 
	//  = VIDEO = 
	//  ==========
	/*
	$(".js-video").click(function(){
		var videoSrc = $(this).parents(".video-item").attr("data-src");
		$("#case-video source").attr("src",videoSrc);
	})
	*/

	
	//  ========== 
	//  = FOOD POPUP = 
	//  ========== 
	
	$(".js-food-show").click(function(){
		$(".js-food-show-pop").show();
	})
	
	$(".js-close-2").click(function(){
        $(".js-food-show-pop").hide();
        return false;
    });
	
	//  ========== 
	//  = CONTACT = 
	//  ========== 
	$('.slickWithArrows').slick({
		dots: false,
		arrows: true,
		autoplay:true,
		slidesToShow:1,
		slidesToScroll:1
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

	//video
	var video = $("#case-video")[0];
	var videoBar = $(".js-play");
	
	videoBar.click(function(){ 
		if(video.paused) {
	       video.play();
	       videoBar.hide();
	  	}
	});
	
	video.onclick=function(){
	    if(video.paused){
	        video.play();
	        videoBar.hide();
	    }else{
	        video.pause();
	        videoBar.show();
	    }
	};
	
	video.addEventListener("pause", function() 
	{
	     videoBar.show();
	});
	
	video.addEventListener("play", function() 
	{
	     videoBar.hide();
	});


	$(".js-video-button").click(function(){
		video.pause();
	    videoBar.show();
		var videoSrc = $(this).attr("data-src");
		$(".video-pop video source").attr("src",videoSrc);
		$(".video-pop video").attr("src",videoSrc);
		$('.video-pop').fadeIn("fast");
		$(".video-pop video").play();
	})


	$('.video-pop .close').click(function(){
		$('.video-pop').hide();
		$(".video-pop video source").attr("src","");
		$(".video-pop video").attr("src","");
	})

    $(".video-pop").click(function(event){	
		$('.video-pop').hide();
		$(".video-pop video source").attr("src","");
		$(".video-pop video").attr("src","");
	});
	
	$(".video-pop .content").click(function(event){	
		event.stopPropagation();	
	});

})