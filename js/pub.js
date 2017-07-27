let pub, pubBlock, paddingTop, paddingRight, marginRight, rightGap, miniGap, pubBlockHeight, topOfPub;

pub = document.querySelector('.pub');
pubBlock = document.querySelector('.contain-ad');
paddingTop = window.getComputedStyle(pubBlock, null).getPropertyValue('padding-top');
paddingTop = Number(paddingTop.replace('px',''));
paddingRight = window.getComputedStyle(pubBlock, null).getPropertyValue('padding-right');
marginRight = window.getComputedStyle(pubBlock, null).getPropertyValue('margin-right');
paddingRight = Number(paddingRight.replace('px',''));
marginRight = Number(marginRight.replace('px',''));
rightGap = paddingRight + marginRight + 'px';
miniGap = 20;
topOfPub = pubBlock.offsetTop;

function fixPub() {
	pubBlockHeight = pubBlock.clientHeight - paddingTop;
	//console.log(window.scrollY+' '+topOfPub+' '+pubBlockHeight+' '+paddingTop);
	if(window.scrollY >= (topOfPub+paddingTop) && window.scrollY <= (pubBlockHeight+miniGap)) {
		pubBlock.classList.remove('bottom-pub');
		pubBlock.classList.add('fixed-pub');
		pub.style.right = rightGap;
	} else {
		pubBlock.classList.remove('fixed-pub');
		pub.style.right = paddingRight + 'px';
		if(window.scrollY > pubBlockHeight) {
			pubBlock.classList.add('bottom-pub');
		}
	}
}

if (window.matchMedia("(min-width: 1024px)").matches) {
	window.addEventListener('scroll', fixPub);
}