var btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

function bgChange(e) {
	var randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	e.target.style.backgroundColor = randomColor;
}

// btn.addEventListener('click', bgChange);

for (var i = 1; i <= 16; i++) {
	var myDiv = document.createElement('div');
	myDiv.style.width = '23%';
	myDiv.style.height = '100px';
	myDiv.style.margin = '2px';
	myDiv.style.padding = '2px';
	myDiv.style.float = 'left';
	myDiv.style.backgroundColor = '#' + random(255) + random(255);
	myDiv.textContent = 'Div ' + i;
	document.body.appendChild(myDiv);
}

var divs = document.querySelectorAll('div');

for (var i = 0; i < divs.length; i++) {
	divs[i].onmouseenter = function (e) {
		e.target.style.backgroundColor = bgChange(e);
	}
}

var body = document.querySelector('body');
window.onload = function () {
	setInterval(() => {
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.backgroundColor = '#' + random(255) + random(255);
		}
	}, 70);
}