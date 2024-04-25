function langIndonesia() {
	localStorage.setItem("lang", "id");
	window.location.reload();
}

function langEnglish() {
	localStorage.setItem("lang", "en");
	window.location.reload();
}

function setSidebarStorage(open) {
	if (open) {
		localStorage.setItem("sidebar", "open");
	} else {
		localStorage.setItem("sidebar", "closed")
	}
}

function switchLang() {
	switchLangStorage();
	window.location.reload();
}

function switchLangStorage() {
	if (localStorage.getItem("lang") == "id") {
		localStorage.setItem("lang", "en");
	} else {
		localStorage.setItem("lang", "id");
	}
}

function switchLangHref(destination) {
	switchLangStorage();
	window.location.href = destination;
}
