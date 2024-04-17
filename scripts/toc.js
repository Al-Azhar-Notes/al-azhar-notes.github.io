// i am a C# developer
// trying javascript

function toc() {
	const tocDiv = document.getElementById("toc");
	const content = document.getElementById("main");
	const headers = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
	
	console.log(headers)

	const ul = document.createElement("ul");
	tocDiv.appendChild(ul)
	
	for (var i = 0; i < headers.length; i++) {
		if (!headers[i].hasAttribute('id')) {
			headers[i].setAttribute('id', `${headers[i].innerHTML.split(" ")[0]}-${i}`)
		}
	}
	
	for (var i = 0; i < headers.length; i++) {
		if (headers[i].hasAttribute('id')) {
			const li = document.createElement("li");
			var level = headers[i].tagName[1];
			console.log(level + headers[i].tagName + headers[i].id)
			if (level == 1) {
				const a = document.createElement("a");
				ul.appendChild(li);
				li.appendChild(a);
				a.href = "#" + headers[i].id
				a.textContent = headers[i].textContent
			}
			else
			{
				var nowUl = document.createElement("ul");
				ul.appendChild(nowUl);

				for (var j = 0; j < level - 2; j++) {
					const currentUl = document.createElement("ul");
					nowUl.appendChild(currentUl);
					nowUl = currentUl;
				}
				
				const currentLi = document.createElement("li");
				const a = document.createElement("a");
				nowUl.appendChild(currentLi);
				currentLi.appendChild(a);
				a.href = "#" + headers[i].id
				a.textContent = headers[i].textContent
			}
		}
	}
}
