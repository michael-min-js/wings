(function($) {

    "use strict";

  
    //redraw every resize
    $( window ).resize(function() {
    	$('.wings-js-wing').remove();
	  	$('.wings-js-heading').wings();
	});

    $.fn.wings = function() {
    	
    	// blend function developed by Pimp Trizkit
    	// used to make a colour lighter or darker
    	// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    	
    	var blend = function(p,c0,c1) {
		    var n=p<0?p*-1:p,u=Math.round,w=parseInt;
		    if(c0.length>7){
		        var f=c0.split(","),t=(c1?c1:p<0?"rgb(0,0,0)":"rgb(255,255,255)").split(","),R=w(f[0].slice(4)),G=w(f[1]),B=w(f[2]);
		        return "rgb("+(u((w(t[0].slice(4))-R)*n)+R)+","+(u((w(t[1])-G)*n)+G)+","+(u((w(t[2])-B)*n)+B)+")"
		    }else{
		        var f=w(c0.slice(1),16),t=w((c1?c1:p<0?"#000000":"#FFFFFF").slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF;
		        return "#"+(0x1000000+(u(((t>>16)-R1)*n)+R1)*0x10000+(u(((t>>8&0x00FF)-G1)*n)+G1)*0x100+(u(((t&0x0000FF)-B1)*n)+B1)).toString(16).slice(1)
		    }
		}

		var dPx = function(strPx) {
			var noPx = parseInt(strPx.replace('px', ''));
			return noPx;
		}

		

		for (var i = 0, len = this.length; i < len; i++) {

			var $obj = $(this[i]);
			
			$obj.addClass('wings-js-heading');
			$obj.css('position', 'relative');

			var	idString = $obj.attr('id'),


				
				l = document.createElement('div'),
				r = document.createElement('div'),
				h = Math.round($obj.height()/2.5),

				pos = $obj.offset(),
				pTop = dPx($obj.css('padding-top')),
				pBot = dPx($obj.css('padding-bottom')),
				hei = $obj.height(),
				wid = $obj.width(),

				top = pos.top+pTop+pBot+hei,

				mLeft = dPx($obj.css('margin-left')),
				mRight = dPx($obj.css('margin-right')),
				pLeft = dPx($obj.css('padding-left')),
				pRight = dPx($obj.css('padding-right')),

				lef = pos.left,
				rig = pos.left+wid+pRight+pLeft-h,
				

				colour = blend(-0.42, $obj.css('background-color')),
				sharedCSS = {
					'width': 0,
					'height': 0,
					'border-style': 'solid',
					'margin': 0,
					'padding': 0,
					'position': 'absolute',
					'top': top + 'px'
					


				};

			
			

			$(l).addClass('wings-js-wing').css(sharedCSS).css({
				'border-color': 'transparent '+colour+' transparent transparent',
				'border-width': '0 '+h+'px '+h+'px 0',	
				'left': lef 
			});


			$(r).addClass('wings-js-wing').css(sharedCSS).css({
				'border-width': h+'px '+h+'px 0 0',
				'border-color': colour+' transparent transparent transparent',
				'left': rig
			});

			$obj.after(l).after(r);
			


		};
		



	}

	

})(jQuery);
