// RETURN VALUE
//	TYPE		: bool
//	DESCRIPTION	: true = indonesia; false = english (fallback);
function isLangIndonesia() {
	if (localStorage.getItem("lang") == "id") {
		return true
	} else {
		return false
	}
}

// RETURN VALUE
//	TYPE		: bool
//	DESCRIPTION	: true = dark; false = light (fallback);
function isDarkMode() {
	if (localStorage.getItem("theme") == "dark") {
		return true
	} else {
		return false
	}
}
