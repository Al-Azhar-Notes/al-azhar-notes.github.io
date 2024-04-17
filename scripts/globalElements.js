// DEPENDENCIES:
// * /scripts/global.js
function updateGlobalElements() {
	if (isLangIndonesia()) {
		document.getElementById("lang-switcher-text").innerHTML = "Baca dalam Bahasa Inggris";
		document.getElementById("link-author").innerHTML = "Tentang Penulis";   
		document.getElementById("link-school").innerHTML = "Tentang Sekolah";   
		document.getElementById("link-lessons").innerHTML = "Mata Pelajaran";   
		document.getElementById("toc-title").innerHTML = "Daftar Isi"
	} else {
		document.getElementById("lang-switcher-text").innerHTML = "Read in Indonesia";
	}
}
