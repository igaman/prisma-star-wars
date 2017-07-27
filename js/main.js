import './menu.js';
import './starallax.js';
import './pub.js';

document.addEventListener('DOMContentLoaded', function() {
	var star = new Starallax({
		elem: '.star-bg',
		gap: 0.15,
	});
	var title = new Starallax({
		elem: '.main-title',
		gap: 0.3,
		top: true
	});
	var droid = new Starallax({
		elem: '.droid-block .container',
		gap: 0.5,
		top: true
	});
}, false);
