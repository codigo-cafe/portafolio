const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('body');

const animateProgressBar = () => {
	let scrollDistance = -section.getBoundingClientRect().top;
	//console.log(scrollDistance);
	let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
	//console.log(progressWidth);
	progressBar.style.width = Math.floor(progressWidth) + "%";
};

window.addEventListener("scroll", animateProgressBar);