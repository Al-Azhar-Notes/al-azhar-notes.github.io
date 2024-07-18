// DEPENDENCIES:
// * /scripts/global.js
// * /scripts/sidebar.js
function updateGlobalElements() {
	if (isLangIndonesia()) {
		try {
			document.getElementById("lang-switcher-text").innerHTML = "Read in Indonesia";
		} catch {
			console.log("lang switcher button not found, moving on...")
		}
		document.getElementById("link-author").innerHTML = "Tentang Penulis";   
		document.getElementById("link-school").innerHTML = "Tentang Sekolah";   
		document.getElementById("link-lessons").innerHTML = "Mata Pelajaran";   
		document.getElementById("toc-title").innerHTML = "Daftar Isi"
	} else {
		try {
			document.getElementById("lang-switcher-text").innerHTML = "Read in Indonesia";
		} catch {
			console.log("lang switcher button not found, moving on...")
		}
	}

	if (isSidebarOpen() && document.body.clientWidth >= 1000) {
		openSidebar(false);
	} else {
		closeSidebar(false);
	}
}
