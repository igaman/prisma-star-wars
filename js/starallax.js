(function() {
	'use strict';
	window.Starallax = function(data) {
		//requestAnimationFrame for smooth animation
		window.requestAnimationFrame = window.requestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| function(f){setTimeout(f, 1000/60)}
		// Find window height and scrol height
		this.scrollHeight = document.body.scrollHeight;
		this.windowHeight = window.innerHeight;
		this.top = data.top;

		//Check if options is good for starallax
		if(data.elem && typeof data.elem === 'string' && data.gap && typeof data.gap === 'number') {
			var elem = document.querySelector(data.elem);
			//check if element is in the DOM
			if(elem) {
				this.elem = document.querySelector(data.elem);
				this.elemHeight = elem.clientHeight;
				this.gap = data.gap;
				//this.topElem = this.elem.offsetTop;
				this.viewportOffset = this.elem.getBoundingClientRect();
				this.topElem = this.viewportOffset.top;
				this.build();
			} else {
				console.error('the element: "'+data.elem+'" does not exist');
				return;
			}
		} else {
			console.error('the options are not good in Starallax Object');
			return;
		}
	}
	//build the parallax
	Starallax.prototype.build = function() {
		var self = this;
		window.addEventListener('scroll', function() {
				//console.log((window.scrollY + window.innerHeight) + ' / '+ self.topElem);
				requestAnimationFrame(self.parallax.bind(self));
			}, false
		);
	}
	//parallax
	Starallax.prototype.parallax = function(elem) {
		var scrollTop = window.pageYOffset - this.topElem ;
		if((window.scrollY + window.innerHeight) >= this.topElem) {
			if(this.top) {
				this.elem.style.top = -(scrollTop * this.gap) +'px';
			} else {
				this.elem.style.backgroundPosition = 'center '+ -(scrollTop * this.gap) +'px';
			}
		}
	}
}());