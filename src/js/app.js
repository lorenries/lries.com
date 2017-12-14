// JS Goes here - ES6 supported
const colors = [{"c1": "#111","c2": "#fafafa"},{"c1": "#11ce74","c2": "#231f52"},{"c1": "#639e60","c2": "#001b01"},{"c1": "#006d4f","c2": "#f4eda2"},{"c1": "#002e28","c2": "#95a8cb"},{"c1": "#ee12ac","c2": "#06120b"},{"c1": "#108084","c2": "#fafdfd"},{"c1": "#c99add","c2": "#3e0bb0"},{"c1": "#afdaff","c2": "#4c01a0"},{"c1": "#222292","c2": "#e7bdb9"},{"c1": "#f1a7e7","c2": "#604063"},{"c1": "#7dc2ff","c2": "#561a7d"},{"c1": "#4ea082","c2": "#300e08"},{"c1": "#0200dc","c2": "#91c992"},{"c1": "#67a6d9","c2": "#1613af"},{"c1": "#9498a7","c2": "#101f8b"},{"c1": "#dd4b2a","c2": "#0e081f"},{"c1": "#e8ccac","c2": "#3210af"},{"c1": "#640c49","c2": "#fb7a07"},{"c1": "#ca4e64","c2": "#00052a"},{"c1": "#3b05cb","c2": "#84d4d9"},{"c1": "#bc5e73","c2": "#13022a"},{"c1": "#977a50","c2": "#0a1116"},{"c1": "#5d2385","c2": "#fc955d"},{"c1": "#ad03b6","c2": "#39fdd8"},{"c1": "#eec3e2","c2": "#460894"},{"c1": "#ce3c63","c2": "#fafdfe"},{"c1": "#8b8e5a","c2": "#1e1310"},{"c1": "#80b6d2","c2": "#76124f"},{"c1": "#c69fcf","c2": "#030b0d"},{"c1": "#972db2","c2": "#ffee84"},{"c1": "#4900ae","c2": "#84e7af"},{"c1": "#d80681","c2": "#fef5dc"},{"c1": "#27fb20","c2": "#6f4ea5"},{"c1": "#0e26b8","c2": "#eac954"},{"c1": "#478960","c2": "#040147"},{"c1": "#f35567","c2": "#20161d"},{"c1": "#2b31b5","c2": "#a6eb71"},{"c1": "#f32937","c2": "#25020f"},{"c1": "#3982b8","c2": "#06102d"},{"c1": "#6957dc","c2": "#d9ffe7"},{"c1": "#e7b7d6","c2": "#93026a"},{"c1": "#535073","c2": "#c4eed4"},{"c1": "#57334b","c2": "#e8b13b"},{"c1": "#cfac01","c2": "#561d05"},{"c1": "#c7b1ff","c2": "#202a73"},{"c1": "#c16c40","c2": "#100a3c"},{"c1": "#df516e","c2": "#0d0f02"},{"c1": "#559059","c2": "#360604"},{"c1": "#873a9a","c2": "#e1f7cb"},{"c1": "#060961","c2": "#f4f6c0"},{"c1": "#e044b3","c2": "#200012"},{"c1": "#700ce0","c2": "#eecd8a"},{"c1": "#cd51a3","c2": "#100d13"},{"c1": "#03edfc","c2": "#070c86"},{"c1": "#09f15f","c2": "#910130"},{"c1": "#b1e3e3","c2": "#6e4f9f"},{"c1": "#3029ed","c2": "#88fd83"},{"c1": "#4d8763","c2": "#0c0129"},{"c1": "#1dcff5","c2": "#220503"},{"c1": "#413913","c2": "#12bce8"},{"c1": "#08cb47","c2": "#1e2856"},{"c1": "#c5fe6a","c2": "#6e49cf"},{"c1": "#0b5b8d","c2": "#27edb5"},{"c1": "#970859","c2": "#eaed79"},{"c1": "#fa5ddf","c2": "#020276"},{"c1": "#016f37","c2": "#4af893"},{"c1": "#f971ec","c2": "#112291"},{"c1": "#260c68","c2": "#349be1"},{"c1": "#3490f9","c2": "#101475"},{"c1": "#0fb86f","c2": "#2c095d"},{"c1": "#866516","c2": "#a8ffe2"},{"c1": "#527504","c2": "#edf67a"},{"c1": "#165096","c2": "#e0fa1e"},{"c1": "#174dad","c2": "#e2de21"},{"c1": "#42381a","c2": "#ffff25"},{"c1": "#8a9cd1","c2": "#450e5b"},{"c1": "#de0113","c2": "#ddf9ed"},{"c1": "#3e9653","c2": "#081350"},{"c1": "#a710c1","c2": "#ddfcf9"},{"c1": "#09e4af","c2": "#13302e"},{"c1": "#32a300","c2": "#301f2e"},{"c1": "#cb07c3","c2": "#f9fcdd"},{"c1": "#958ff6","c2": "#231f8d"},{"c1": "#3b2956","c2": "#6dc9ce"},{"c1": "#2f0afa","c2": "#aade8a"},{"c1": "#f096aa","c2": "#11364c"},{"c1": "#f781b9","c2": "#63073f"},{"c1": "#f2c9ca","c2": "#575950"},{"c1": "#1a9a80","c2": "#271647"},{"c1": "#c46224","c2": "#12102b"},{"c1": "#2fab33","c2": "#47133b"},{"c1": "#7101eb","c2": "#f5f396"},{"c1": "#e5c877","c2": "#040578"},{"c1": "#9e8f6a","c2": "#2f0579"},{"c1": "#0b7761","c2": "#f5edf7"},{"c1": "#e1bda3","c2": "#6f1c06"},{"c1": "#eeeccf","c2": "#4c6d15"},{"c1": "#1d0b4c","c2": "#f8e0bc"},{"c1": "#e21625","c2": "#f3ffbe"}];
const body = document.querySelector('body');
const email = document.querySelector("#hidden");
const clickElements = ["MAIN","DIV","SECTION","NAV", "HEADER", "BODY", "FOOTER"];
const randomColor = generateRandomColor();

document.documentElement.style.setProperty('--main', randomColor.c1);
document.documentElement.style.setProperty('--bg', randomColor.c2);
document.addEventListener('click', handleDocumentColorChange, true)

function handleDocumentColorChange(e) {
	if (clickElements.includes(e.target.nodeName)) {
		changeColor();
	}
}

function changeColor() {
	const newColor = generateRandomColor();
	document.documentElement.style.setProperty('--main', newColor.c1);
	document.documentElement.style.setProperty('--bg', newColor.c2);
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
	const random = getRandomIntInclusive(0, 99);
	return colors[random];
}

// Readability functionality

const readability = document.querySelector('.js-readability');
const main = document.querySelector('main');

if (readability) {
	checkOverlap();
	window.addEventListener('resize', resizeThrottler, false);
	readability.addEventListener('click', (e) => {
		e.preventDefault();
		if (readability.getAttribute('data-readability') === 'off') {
			document.removeEventListener('click', handleDocumentColorChange, true);
			readability.innerHTML = 'Toggle Color';
			document.documentElement.style.setProperty('--main', '#111');
			document.documentElement.style.setProperty('--bg', '#f1f1f1');
			readability.setAttribute('data-readability', 'on')
		} else if (readability.getAttribute('data-readability') === 'on') {
			document.addEventListener('click', handleDocumentColorChange, true);
			readability.innerHTML = 'Toggle Black & White';
			changeColor();
			readability.setAttribute('data-readability', 'off')
		}

	})
}

var resizeTimeout;
function resizeThrottler() {
  if ( !resizeTimeout ) {
    resizeTimeout = setTimeout(function() {
      resizeTimeout = null;
      actualResizeHandler();
     }, 100);
  }
}

function actualResizeHandler() {
	checkOverlap();
}

function checkOverlap() {
	const mainRect = main.getBoundingClientRect();
	const readabilityRect = readability.getBoundingClientRect();
	var overlap = !(mainRect.right < readabilityRect.left || mainRect.left > readabilityRect.right || mainRect.bottom < readabilityRect.top || mainRect.top > readabilityRect.bottom);
	if (overlap) {
		readability.classList.add('pv1', 'ph2', 'br-pill', 'dim', 'ma3');
		readability.style.cssText = 'background-color: var(--main); color: var(--bg)';
	} else {
		readability.classList.remove('pv1', 'ph2', 'br-pill', 'dim', 'ma3');
		readability.style.cssText = '';
	}
}

if (email) {
	email.innerHTML = ['loren','.','riesenfeld','@','gmail.com'].join('');
}