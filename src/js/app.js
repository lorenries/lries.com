// JS Goes here - ES6 supported

const colors = [{"color_one": "#111","color_two": "#fafafa"},{"color_one": "#11ce74","color_two": "#231f52"},{"color_one": "#639e60","color_two": "#001b01"},{"color_one": "#006d4f","color_two": "#f4eda2"},{"color_one": "#002e28","color_two": "#95a8cb"},{"color_one": "#ee12ac","color_two": "#06120b"},{"color_one": "#108084","color_two": "#fafdfd"},{"color_one": "#c99add","color_two": "#3e0bb0"},{"color_one": "#afdaff","color_two": "#4c01a0"},{"color_one": "#222292","color_two": "#e7bdb9"},{"color_one": "#f1a7e7","color_two": "#604063"},{"color_one": "#7dc2ff","color_two": "#561a7d"},{"color_one": "#4ea082","color_two": "#300e08"},{"color_one": "#0200dc","color_two": "#91c992"},{"color_one": "#67a6d9","color_two": "#1613af"},{"color_one": "#9498a7","color_two": "#101f8b"},{"color_one": "#dd4b2a","color_two": "#0e081f"},{"color_one": "#e8ccac","color_two": "#3210af"},{"color_one": "#640c49","color_two": "#fb7a07"},{"color_one": "#ca4e64","color_two": "#00052a"},{"color_one": "#3b05cb","color_two": "#84d4d9"},{"color_one": "#bc5e73","color_two": "#13022a"},{"color_one": "#977a50","color_two": "#0a1116"},{"color_one": "#5d2385","color_two": "#fc955d"},{"color_one": "#ad03b6","color_two": "#39fdd8"},{"color_one": "#eec3e2","color_two": "#460894"},{"color_one": "#ce3c63","color_two": "#fafdfe"},{"color_one": "#8b8e5a","color_two": "#1e1310"},{"color_one": "#80b6d2","color_two": "#76124f"},{"color_one": "#c69fcf","color_two": "#030b0d"},{"color_one": "#972db2","color_two": "#ffee84"},{"color_one": "#4900ae","color_two": "#84e7af"},{"color_one": "#d80681","color_two": "#fef5dc"},{"color_one": "#27fb20","color_two": "#6f4ea5"},{"color_one": "#0e26b8","color_two": "#eac954"},{"color_one": "#478960","color_two": "#040147"},{"color_one": "#f35567","color_two": "#20161d"},{"color_one": "#2b31b5","color_two": "#a6eb71"},{"color_one": "#f32937","color_two": "#25020f"},{"color_one": "#3982b8","color_two": "#06102d"},{"color_one": "#6957dc","color_two": "#d9ffe7"},{"color_one": "#e7b7d6","color_two": "#93026a"},{"color_one": "#535073","color_two": "#c4eed4"},{"color_one": "#57334b","color_two": "#e8b13b"},{"color_one": "#cfac01","color_two": "#561d05"},{"color_one": "#c7b1ff","color_two": "#202a73"},{"color_one": "#c16c40","color_two": "#100a3c"},{"color_one": "#df516e","color_two": "#0d0f02"},{"color_one": "#559059","color_two": "#360604"},{"color_one": "#873a9a","color_two": "#e1f7cb"},{"color_one": "#060961","color_two": "#f4f6c0"},{"color_one": "#e044b3","color_two": "#200012"},{"color_one": "#700ce0","color_two": "#eecd8a"},{"color_one": "#cd51a3","color_two": "#100d13"},{"color_one": "#03edfc","color_two": "#070c86"},{"color_one": "#09f15f","color_two": "#910130"},{"color_one": "#b1e3e3","color_two": "#6e4f9f"},{"color_one": "#3029ed","color_two": "#88fd83"},{"color_one": "#4d8763","color_two": "#0c0129"},{"color_one": "#1dcff5","color_two": "#220503"},{"color_one": "#413913","color_two": "#12bce8"},{"color_one": "#08cb47","color_two": "#1e2856"},{"color_one": "#c5fe6a","color_two": "#6e49cf"},{"color_one": "#0b5b8d","color_two": "#27edb5"},{"color_one": "#970859","color_two": "#eaed79"},{"color_one": "#fa5ddf","color_two": "#020276"},{"color_one": "#016f37","color_two": "#4af893"},{"color_one": "#f971ec","color_two": "#112291"},{"color_one": "#260c68","color_two": "#349be1"},{"color_one": "#3490f9","color_two": "#101475"},{"color_one": "#0fb86f","color_two": "#2c095d"},{"color_one": "#866516","color_two": "#a8ffe2"},{"color_one": "#527504","color_two": "#edf67a"},{"color_one": "#165096","color_two": "#e0fa1e"},{"color_one": "#174dad","color_two": "#e2de21"},{"color_one": "#42381a","color_two": "#ffff25"},{"color_one": "#8a9cd1","color_two": "#450e5b"},{"color_one": "#de0113","color_two": "#ddf9ed"},{"color_one": "#3e9653","color_two": "#081350"},{"color_one": "#a710c1","color_two": "#ddfcf9"},{"color_one": "#09e4af","color_two": "#13302e"},{"color_one": "#32a300","color_two": "#301f2e"},{"color_one": "#cb07c3","color_two": "#f9fcdd"},{"color_one": "#958ff6","color_two": "#231f8d"},{"color_one": "#3b2956","color_two": "#6dc9ce"},{"color_one": "#2f0afa","color_two": "#aade8a"},{"color_one": "#f096aa","color_two": "#11364c"},{"color_one": "#f781b9","color_two": "#63073f"},{"color_one": "#f2c9ca","color_two": "#575950"},{"color_one": "#1a9a80","color_two": "#271647"},{"color_one": "#c46224","color_two": "#12102b"},{"color_one": "#2fab33","color_two": "#47133b"},{"color_one": "#7101eb","color_two": "#f5f396"},{"color_one": "#e5c877","color_two": "#040578"},{"color_one": "#9e8f6a","color_two": "#2f0579"},{"color_one": "#0b7761","color_two": "#f5edf7"},{"color_one": "#e1bda3","color_two": "#6f1c06"},{"color_one": "#eeeccf","color_two": "#4c6d15"},{"color_one": "#1d0b4c","color_two": "#f8e0bc"},{"color_one": "#e21625","color_two": "#f3ffbe"}];
const body = document.querySelector('body');
const email = document.querySelector("#hidden");

const randomColor = generateRandomColor()

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor() {
	const random = getRandomIntInclusive(0, 99);
	return colors[random];
}

document.documentElement.style.setProperty('--main', randomColor.color_one);
document.documentElement.style.setProperty('--bg', randomColor.color_two);

body.addEventListener('click', (e) => {
	if (e.target.nodeName !== 'A') {
		const newColor = generateRandomColor();
		document.documentElement.style.setProperty('--main', newColor.color_one);
		document.documentElement.style.setProperty('--bg', newColor.color_two);
	}
}, true)

email.innerHTML = ['loren','.','riesenfeld','@','gmail.com'].join('');