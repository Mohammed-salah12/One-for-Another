// function animateItem(){
//     if ($('.item-animation').length) {
//       $('.item-animation').not('.animated').each(function(){ 
//        if($(window).scrollTop() >= $(this).offset().top - ($(window).height()*1.1))
//         {$(this).addClass('animated');}});
//      }
//  }		

                                              
// 	/*============================*/
// 	/* 02 - SWIPER SLIDER */
// 	/*============================*/
                          
// 	function initSwiper(){
// 		var initIterator = 0;
// 		$('.swiper-container').each(function(){								  
// 			var $t = $(this);								  
// 			var index = 'swiper-unique-id-'+initIterator;

// 			$t.addClass('swiper-'+index + ' initialized').attr('id', index);
// 			$t.find('.pagination').addClass('pagination-'+index);

// 			var autoPlayVar = parseInt($t.attr('data-autoplay'),10);
//             var slideEffect = $t.attr('data-effect');
// 			var slidesPerViewVar = $t.attr('data-slides-per-view');
	
// 			if(slidesPerViewVar == 'responsive'){
// 				slidesPerViewVar = updateSlidesPerView($t);
// 			}

//             var directMode = $t.attr('data-mode');
// 			var loopVar = parseInt($t.attr('data-loop'),10);
// 			var parallaxVal = parseInt($t.attr('data-parallax'),10);
// 			var speedVar = parseInt($t.attr('data-speed'),10);
//             var centerVar = parseInt($t.attr('data-center'),10);
// 			var freeMode = parseInt($t.attr('data-freemode'),10);
// 			var space = parseInt($t.attr('space-between'),10);
// 			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
// 				speed: speedVar,
// 				pagination: '.pagination-'+index,
// 				paginationHide:false,
// 				loop: loopVar,
// 				paginationClickable: true,
// 				autoplay: autoPlayVar,
// 				slidesPerView: slidesPerViewVar,
// 				keyboardControl: true, 
// 				simulateTouch: true,
// 				centeredSlides: centerVar,
// 				effect: slideEffect,
//                 coverflow: {
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows : false
//                 },
// 				direction: directMode,
// 				freeMode: freeMode,
//                 updateTranslate: true,
//                 observer:true,
//                 parallax:parallaxVal,
//                 preventClicks: true,
//                 longSwipesRatio: 0.1,
//                 spaceBetween: ($t.is('[data-space]'))?parseInt($t.data('space'), 10):0,
//                 onSlideChangeStart: function(swiper){
// 		           var activeIndex = (loopVar===1)?swiper.activeLoopIndex:swiper.activeIndex;
// 				   if($t.closest('.slider-swiching').length){
// 						swipers['swiper-'+$t.closest('.slider-swiching').find('.swich-parent').attr('id')].slideTo(swiper.activeIndex);
// 						$t.closest('.slider-swiching').find('.slide-swich').removeClass('active');
// 						$t.closest('.slider-swiching').find('.slide-swich').eq(activeIndex).addClass('active');
// 					}

// 					if ( $t.hasClass('swiper-control-top') ) {
// 						var activeIndex = swiper.activeIndex,
// 						slidersWrapper = $t.closest('.swipers-wrapper');
// 						swipers['swiper-'+slidersWrapper.find('.swiper-control-bottom').attr('id')].slideTo(activeIndex);
// 						slidersWrapper.find('.swiper-control-bottom').find('.active').removeClass('active');
//                     	slidersWrapper.find('.swiper-control-bottom').find('.swiper-slide').eq(activeIndex).addClass('active');
// 					}
// 				},

// 				onClick: function(swiper){
// 					var activeIndex1 =  swiper.clickedIndex;
// 					if ($t.closest('.checkbox-wrapp').length){
// 						swiper.slideTo(activeIndex1);
// 					}
// 				}
                
// 			});
			
// 			swipers['swiper-'+index].update();
// 			initIterator++;
// 		});
// 		$('.swiper-container.swiper-control-top').each(function(){
// 			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-bottom').attr('id')];
// 		});
// 		$('.swiper-container.swiper-control-bottom').each(function(){
// 			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-top').attr('id')];
// 		});
// 	}
               
//     $(document).on('click','.slide-swich', function(){
// 		var swichIndex = $(this).closest('.slider-swiching').find('.slide-swich').index(this);
// 		 $(this).closest('.slider-swiching').find('.slide-swich').removeClass('active');	
// 		  $(this).addClass('active');	
// 			swipers['swiper-'+$(this).closest('.slider-swiching').find('.container-swich').attr('id')].slideTo(swichIndex);		
// 		  return false;
// 	});                
           
//     $(document).on('click', '.swiper-arrow-left', function(){
// 		swipers['swiper-'+$(this).closest('.arrow-closest').find('.swiper-container').attr('id')].slidePrev();
// 	});
                    
// 	$(document).on('click', '.swiper-arrow-right', function(){
// 		swipers['swiper-'+$(this).closest('.arrow-closest').find('.swiper-container').attr('id')].slideNext();  
// 	});

//     /*============================*/
// 	/* 15 - COPLE SWIPER  */
// 	/*============================*/
// 	$('.controlTopSwiper').on('click', function(){
//         var index = $(this).closest('.swiper-container').find('.swiper-slide').index($(this).parent());
//         swipers['swiper-'+$(this).closest('.swipers-wrapper').find('.swiper-control-top').attr('id')].slideTo(index);
//     });

//     /*============================*/
// 	/* 10 - CLICK AND HOVER  */
// 	/*============================*/
     
//     $('.like-item').on('click', function(){
//         $(this).toggleClass('active');
//     });
                    
//     $(document).on('click', '.custom-input-number .cin-increment', function(e) {
//          var $input = $(this).siblings('.cin-input'),
//             val = parseInt($input.val()),
//             max = parseInt($input.attr('max')),
//             step = parseInt($input.attr('step'));
//          var temp = val + step;
//         $input.val(temp <= max ? temp : max);
//     });
//     $(document).on('click', '.custom-input-number .cin-decrement', function(e) {
//         var $input = $(this).siblings('.cin-input'),
//             val = parseInt($input.val()),
//             min = parseInt($input.attr('min')),
//             step = parseInt($input.attr('step'));
//         var temp = val - step;
//         $input.val(temp >= min ? temp : min);
//     });
    
//     $('.open-popup').on('click', function(){
//        var indexPopup = $(this).attr('data-open');
//         $('.index-'+indexPopup).addClass('active');
//         $('body').addClass('overflow');
//         return false;
//     }); 
                    
//     $('.close-popup').on('click', function(){
//         $('.popup').removeClass('active');
//         $('body').removeClass('overflow');
//     });
                    
//     $('.close-item').on('click', function(){
//        $(this).parent().remove(); 
//     });                
    
//     $('.shop-icon').on('click', function(){
//         $('.shop-card-list').toggleClass('active');
//     });
                    
//     $('.close-card-mobile').on('click', function(){
//         $('.shop-card-list').removeClass('active');
//     });                
    
// 	$('.select-open').on('click', function(){
// 	  	$(this).toggleClass('active').next().slideToggle();
// 	});
    
//     if ($(window).width() < 992){
// 		$('.mobile-select ul li').on('click', function(){
// 			$(this).closest('.mobile-select').find('.select-open .txt').text($(this).text());
// 			   $(this).closest('.mobile-select').find('.select-open').removeClass('active');
// 			    $(this).closest('.mobile-select').find('ul').slideUp(300);
// 			return false;
// 		});	
// 	}					
				
	 
// var TrandingSlider = new Swiper('.tranding-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     loop: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 2.5,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
//   });

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: -10,
      stretch: 1,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    //  clickable: true,
    },
  });