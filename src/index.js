function convertToJson(response) {
	if (response.ok) {
		return response.json();
	} else {
		throw new error("bad response");
	}
}

function getData(url, callback) {
	fetch(url)
		.then(convertToJson)
		.then((data) => {
			// console.log(data);
			if (callback) {
				callback(data);
			}
		});
}

window.addEventListener("load", function () {
	getData("https://pokeapi.co/api/v2/type", renderTypeList);

	document
		.getElementById("typeList")
		.addEventListener("click", typeClickedHandler);
});

function renderTypeList(list) {
	const element = document.getElementById("typeList");
	const typeResult = cleanTypeList(list.results);

	typeResult.forEach((item) => {
		const li = document.createElement("li");
		li.innerHTML = `${item.name}`;
		li.classList.add(`${item.name}`);

		li.setAttribute("data-url", item.url);
		element.appendChild(li);
	});
}

function typeClickedHandler(event) {
	const selectedType = event.target;
	const url = selectedType.dataset.url;
	getData(url, renderPokeList);
	setActive(url);
}

function renderPokeList(list) {
	const element = document.getElementById("pokeList");
	element.innerHTML = "";
	list.pokemon.forEach((item) => {
		const li = document.createElement("li");
		li.innerHTML = `${item.pokemon.name}`;

		li.setAttribute("data-url", item.pokemon.url);
		element.appendChild(li);
	});
}

function setActive(type) {
	const allTypes = document.querySelectorAll(".types > li");

	allTypes.forEach((item) => {
		if (item.dataset.url === type) {
			switch (item.dataset.url) {
				case "https://pokeapi.co/api/v2/type/1/":
					item.classList.add("bg-slate-200");
					break;
				case "https://pokeapi.co/api/v2/type/2/":
					item.classList.add("bg-red-800");
					break;
				case "https://pokeapi.co/api/v2/type/3/":
					item.classList.add("bg-teal-200");
					break;
				case "https://pokeapi.co/api/v2/type/4/":
					item.classList.add("bg-violet-700");
					break;
				case "https://pokeapi.co/api/v2/type/5/":
					item.classList.add("bg-orange-400");
					break;
				case "https://pokeapi.co/api/v2/type/6/":
					item.classList.add("bg-yellow-900");
					break;
				case "https://pokeapi.co/api/v2/type/7/":
					item.classList.add("bg-lime-500");
					break;
				case "https://pokeapi.co/api/v2/type/8/":
					item.classList.add("bg-violet-600");
					break;
				case "https://pokeapi.co/api/v2/type/9/":
					item.classList.add("bg-slate-600");
					break;
				case "https://pokeapi.co/api/v2/type/10/":
					item.classList.add("bg-red-600");
					break;
				case "https://pokeapi.co/api/v2/type/11/":
					item.classList.add("bg-sky-700");
					break;
				case "https://pokeapi.co/api/v2/type/12/":
					item.classList.add("bg-green-500");
					break;
				case "https://pokeapi.co/api/v2/type/13/":
					item.classList.add("bg-amber-300");
					break;
				case "https://pokeapi.co/api/v2/type/14/":
					item.classList.add("bg-pink-400");
					break;
				case "https://pokeapi.co/api/v2/type/15/":
					item.classList.add("bg-blue-400");
					break;
				case "https://pokeapi.co/api/v2/type/16/":
					item.classList.add("bg-emerald-600");
					break;
				case "https://pokeapi.co/api/v2/type/17/":
					item.classList.add("bg-zinc-800");
					break;
				case "https://pokeapi.co/api/v2/type/18/":
					item.classList.add("bg-pink-200");
					break;
				case "https://pokeapi.co/api/v2/type/1/":
					item.classList.add("bg-slate-200");
					break;
			}
		} else {
			item.className = "";
		}
	});
}

function cleanTypeList(list) {
	return list.filter((item) => item.name != "shadow" && item.name != "unknown");
}
