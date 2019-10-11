var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
// console.log(request);
request.open('GET', requestURL);
request.responseType = 'json';
request.send()

request.onload = function () {
	var superheroes = request.response;
	console.log(superheroes);
	populateHeader(superheroes);
	showHeroes(superheroes);
}

function populateHeader(jsonObj) {
	var myH1 = document.createElement('h1');
	myH1.textContent = jsonObj['squadName'];
	header.appendChild(myH1);

	var myPara = document.createElement('p');
	myPara.textContent = 'Home Town: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
	header.appendChild(myPara);
}

function showHeroes(jsonObj) {
	var heroes = jsonObj['members'];
	for(i=0; i<heroes.length; i++) {
		var myArticle = document.createElement('article');
		var myH2 = document.createElement('h2');
		var myPara1 = document.createElement('p');
		var myPara2 = document.createElement('p');
		var myPara3 = document.createElement('p');
		var myList = document.createElement('ul');
		var hrLine = document.createElement('hr');

		myH2.textContent = heroes[i].name;
		myPara1.textContent = 'Secret Identity: ' + heroes[i].secretIdentity;
		myPara2.textContent = 'Age: ' + heroes[i].age;
		myPara3.textContent = 'Super Powers';

		var superPowers = heroes[i].powers
		for(j=0; j<superPowers.length; j++) {
			var listItem = document.createElement('li');
			listItem.textContent = superPowers[j];
			myList.appendChild(listItem);
		}

		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myList);
		myArticle.appendChild(hrLine);

		section.appendChild(myArticle);
	}
}