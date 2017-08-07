const pub = document.querySelector('.pub');
const menu = document.querySelector('.menu');
const menuHeight = menu.offsetHeight;
const pubBlock = document.querySelector('.contain-ad');
let paddingTop = window.getComputedStyle(pubBlock, null).getPropertyValue('padding-top');
paddingTop = Number(paddingTop.replace('px',''));
let paddingRight = window.getComputedStyle(pubBlock, null).getPropertyValue('padding-right');
paddingRight = Number(paddingRight.replace('px',''));
let marginRight = window.getComputedStyle(pubBlock, null).getPropertyValue('margin-right');
marginRight = Number(marginRight.replace('px',''));
const rightGap = paddingRight + marginRight + 'px';
const miniGap = 20;
const topOfPub = pubBlock.offsetTop;

function fixPub() {
	const pubBlockHeight = pubBlock.clientHeight - paddingTop;
	//console.log(window.scrollY+' '+topOfPub+' '+pubBlockHeight+' '+paddingTop);
	if(window.scrollY >= (topOfPub + paddingTop - menuHeight) && window.scrollY <= (pubBlockHeight + miniGap - menuHeight)) {
		console.log('bim');
		pubBlock.classList.remove('bottom-pub');
		pubBlock.classList.add('fixed-pub');
		pub.style.right = rightGap;
	} else {
		pubBlock.classList.remove('fixed-pub');
		pub.style.right = paddingRight + 'px';
		if(window.scrollY > (pubBlockHeight - menuHeight)) {
			pubBlock.classList.add('bottom-pub');
		}
	}
}

if (window.matchMedia("(min-width: 1024px)").matches) {
	window.addEventListener('scroll', fixPub);
}