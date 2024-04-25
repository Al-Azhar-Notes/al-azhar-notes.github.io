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

// RETURN VALUE
//	TYPE		: bool
//	DESCRIPTION	: true = sidebar open (fallback); false = sidebar close;
function isSidebarOpen() {
	if (localStorage.getItem("sidebar") == "closed") {
		return false
	} else {
		return true
	}
}
