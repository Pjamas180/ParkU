/**
 * jquery.dropdown.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
 ;( function( $, window, undefined ) {
 	'use strict';
 	var temp = null;
 	var data = null;
 	var vehicleVar = null;

 	if(vehicleVar === null || temp === null || data === null )
	{
		$(".confirmation").css('background-color', 'gray');
		$(".confirmation").attr('disabled', 'disabled');
		$(".confirmation").addClass('disabled');
	}

 	$.DropDown = function( options, element ) {
 		this.$el = $( element );
 		this._init( options );
 	};

	// the options
	$.DropDown.defaults = {
		speed : 300,
		easing : 'ease',
		gutter : 0,
		// initial stack effect
		stack : true,
		// delay between each option animation
		delay : 0,
		// random angle and positions for the options
		random : false,
		// rotated [right||left||false] : the options will be rotated to thr right side or left side.
		// make sure to tune the transform origin in the stylesheet
		rotated : false,
		// effect to slide in the options. value is the margin to start with
		slidingIn : false,
		onOptionSelect : function(opt) { return false; }
	};

	$.DropDown.prototype = {
		_init : function( options ) {
			// options
			this.options = $.extend( true, {}, $.DropDown.defaults, options );
			this._layout();
			this._initEvents();
		},
		_layout : function() {
			var self = this;
			this.minZIndex = 1000;
			var value = this._transformSelect();
			this.opts = this.listopts.children( 'li' );
			this.optsCount = this.opts.length;
			this.size = { width : this.dd.width(), height : this.dd.height() };
			
			var elName = this.$el.attr( 'name' ), elId = this.$el.attr( 'id' ),
			inputName = elName !== undefined ? elName : elId !== undefined ? elId : 'cd-dropdown-' + ( new Date() ).getTime();

			this.inputEl = $( '<input type="hidden" name="' + inputName + '" value="' + value + '"></input>' ).insertAfter( this.selectlabel );
			
			this.selectlabel.css( 'z-index', this.minZIndex + this.optsCount );
			this._positionOpts();
			if( Modernizr.csstransitions ) {
				setTimeout( function() { self.opts.css( 'transition', 'all ' + self.options.speed + 'ms ' + self.options.easing ); }, 25 );
			}
		},
		_transformSelect : function() {
			var optshtml = '', selectlabel = '', value = -1;
			this.$el.children( 'option' ).each( function() {
				var $this = $( this ),
				val = isNaN( $this.attr( 'value' ) ) ? $this.attr( 'value' ) : Number( $this.attr( 'value' ) ) ,
				classes = $this.attr( 'class' ),
				selected = $this.attr( 'selected' ),
				label = $this.text();
				if( val !== -1 ) {
					optshtml += 
					classes !== undefined ? 
					'<li data-value="' + val + '"><span class="' + classes + '">' + label + '</span></li>' :
					'<li data-value="' + val + '"><span>' + label + '</span></li>';
				}
				if( selected ) {
					selectlabel = label;
					value = val;
				}
			} );
			this.listopts = $( '<ul/>' ).append( optshtml );
			this.selectlabel = $( '<span/>' ).append( selectlabel );
			this.dd = $( '<div class="cd-dropdown"/>' ).append( this.selectlabel, this.listopts ).insertAfter( this.$el );
			this.$el.remove();

			return value;
		},
		_positionOpts : function( anim ) {

			var self = this;

			this.listopts.css( 'height', 'auto' );
			this.opts
			.each( function( i ) {
				$( this ).css( {
					zIndex : self.minZIndex + self.optsCount - 1 - i,
					top : self.options.slidingIn ? ( i + 1 ) * ( self.size.height + self.options.gutter ) : 0,
					left : 0,
					marginLeft : self.options.slidingIn ? i % 2 === 0 ? self.options.slidingIn : - self.options.slidingIn : 0,
					opacity : self.options.slidingIn ? 0 : 1,
					transform : 'none'
				} );
			} );

			if( !this.options.slidingIn ) {
				this.opts
				.eq( this.optsCount - 1 )
				.css( { top : this.options.stack ? 9 : 0, left : this.options.stack ? 4 : 0, width : this.options.stack ? this.size.width - 8 : this.size.width, transform : 'none' } )
				.end()
				.eq( this.optsCount - 2 )
				.css( { top : this.options.stack ? 6 : 0, left : this.options.stack ? 2 : 0, width : this.options.stack ? this.size.width - 4 : this.size.width, transform : 'none' } )
				.end()
				.eq( this.optsCount - 3 )
				.css( { top : this.options.stack ? 3 : 0, left : 0, transform : 'none' } );
			}

		},
		_initEvents : function() {
			var self = this;
			this.selectlabel.on( 'mousedown.dropdown', function( event ) {
				self.opened ? self.close() : self.open();
				return false;
			} );
			this.opts.on( 'click.dropdown', function() {
				if( self.opened ) {						
					data = this.getAttribute("data-value");
					// This is for spot type
					var spot_Type ='//*[@id="uploadDocsForm"]/div[1]/ul/li[position() >= 1 and position() < 3]/span';
					var spot_dropdown = document.evaluate( spot_Type, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;	

					// This is for vehicle list
					var vehicleXPATH = '//*[@id="uploadDocsForm"]/div[3]/ul/li/span';
					vehicleVar = document.evaluate( vehicleXPATH, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;	
					console.log(vehicleVar);
					if(data === "v")
						temp = "v";
					else if(data === "vp")
						temp = "vp";
					if(temp !== null && data !== null )
					{
						
							$(".confirmation").css('background-color', '#4CAF50');
							$(".confirmation").removeAttr('disabled');
							$(".confirmation").removeClass('disabled');
						
					}
					$('button.confirmation').click(function(){
						if (data === "a" || data === "b" || data === "c" || data === "d" || data === "e"){
							swal({  
								title: "Confirm payment", text: "Are you sure you want to purchase this pass?", type: "warning",
								showCancelButton: true, confirmButtonColor: "#3085D6", cancelButtonColor: "#DD6B55", confirmButtonText: "Confirm",
								cancelButtonText: "Decline", closeOnConfirm: false, closeOnCancel: false, allowOutsideClick: false, allowEscapeKey: true
							}, function(isConfirm){
								if (isConfirm) {
									swal({
										title: 'Sweet!', html: 'Clicking this will redirect you to PayPal for completion.<br>Look out for blocked pop-ups!', 
										imageUrl: 'images/thumbs-up.jpg', animation: true, showCancelButton: true, cancelButtonColor: "#DD6B55"
									}, function (isConfirm) {
										if(isConfirm){
											if(data === "a" && temp === "v")
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20V%20Permits%20(1hr)&amount=1%2e33&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "b" && temp === "v")
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20V%20Permits%20(2hrs)&amount=2%2e67&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "c" && temp === "v")
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20V%20Permits%20(4hrs)&amount=5%2e33&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "d" && temp === "v")
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20V%20Permits%20(8hrs)&amount=10%2e67&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "e" && temp === "v")
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20V%20Permits%20(All%20Day)&amount=8%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "a" && temp === "vp" /*spot_dropdown.innerHTML === "Visitor (V)"*/)
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20VP%20Permits%20(1hr)&amount=2%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "b" && temp === "vp" /*spot_dropdown.innerHTML === "Visitor (V)"*/)
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20VP%20Permits%20(2hrs)&amount=4%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "c" && temp === "vp" /*spot_dropdown.innerHTML === "Visitor (V)"*/)
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20VP%20Permits%20(4hrs)&amount=8%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "d" && temp === "vp" /*spot_dropdown.innerHTML === "Visitor (V)"*/)
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20VP%20Permits%20(8hrs)&amount=16%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else if(data === "e" && temp === "vp" /*spot_dropdown.innerHTML === "Visitor (V)"*/)
												window.open('https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=LWHJW82U99LPU&lc=US&item_name=UCSD%20VP%20Permits%20(All%20Day)&amount=16%2e00&currency_code=USD&button_subtype=services&no_note=0&cn=Add%20special%20instructions%20to%20the%20seller%3a&no_shipping=2&tax_rate=0%2e000&shipping=0%2e00&bn=PP%2dBuyNowBF%3abtn_paynowCC_LG%2egif%3aNonHosted, _blank');
											else
												alert("The dropdowns are not complete yet.")
										}
									});
								}
								else
									swal("Declined!", "Transaction was not processed!", "error");   
							});
						}
					});
					var opt = $( this );
					self.options.onOptionSelect( opt );
					self.inputEl.val( opt.data( 'value' ) );
					self.selectlabel.html( opt.html() );
					self.close();
				}
			});
},
open : function() {
	var self = this;
	this.dd.toggleClass( 'cd-active' );
	this.listopts.css( 'height', ( this.optsCount + 1 ) * ( this.size.height + this.options.gutter ) );
	this.opts.each( function( i ) {

		$( this ).css( {
			opacity : 1,
			top : self.options.rotated ? self.size.height + self.options.gutter : ( i + 1 ) * ( self.size.height + self.options.gutter ),
			left : self.options.random ? Math.floor( Math.random() * 11 - 5 ) : 0,
			width : self.size.width,
			marginLeft : 0,
			transform : self.options.random ?
			'rotate(' + Math.floor( Math.random() * 11 - 5 ) + 'deg)' :
			self.options.rotated ?
			self.options.rotated === 'right' ?
			'rotate(-' + ( i * 5 ) + 'deg)' :
			'rotate(' + ( i * 5 ) + 'deg)'
			: 'none',
			transitionDelay : self.options.delay && Modernizr.csstransitions ? self.options.slidingIn ? ( i * self.options.delay ) + 'ms' : ( ( self.optsCount - 1 - i ) * self.options.delay ) + 'ms' : 0
		} );

	} );
	this.opened = true;

},
close : function() {
	var self = this;
	this.dd.toggleClass( 'cd-active' );
	if( this.options.delay && Modernizr.csstransitions ) {
		this.opts.each( function( i ) {
			$( this ).css( { 'transition-delay' : self.options.slidingIn ? ( ( self.optsCount - 1 - i ) * self.options.delay ) + 'ms' : ( i * self.options.delay ) + 'ms' } );
		} );
	}
	this._positionOpts( true );
	this.opened = false;
}

}

$.fn.dropdown = function( options ) {
	var instance = $.data( this, 'dropdown' );
	if ( typeof options === 'string' ) {
		var args = Array.prototype.slice.call( arguments, 1 );
		this.each(function() {
			instance[ options ].apply( instance, args );
		});
	}
	else {
		this.each(function() {
			instance ? instance._init() : instance = $.data( this, 'dropdown', new $.DropDown( options, this ) );
		});
	}
	return instance;
};

} )( jQuery, window );


