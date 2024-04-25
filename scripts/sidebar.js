function toggleNav() {
	const sidebar = document.getElementById("sidebar");
	const sStyle = window.getComputedStyle(sidebar);

	if (sStyle.visibility == "hidden") {
		openSidebar(true);
	} else {
		closeSidebar(true);
	}
}

function openSidebar(useAnim) {
	if (useAnim) {
		document.getElementById("main").style.removeProperty("transition");
		document.getElementById("banner").style.removeProperty("transition");
		document.getElementById("topbtn").style.removeProperty("transition");
		document.getElementById("chip-container").style.removeProperty("transition");
		document.getElementById("sidebar").style.removeProperty("transition");
	} else {
		document.getElementById("main").style.transition = "none";
		document.getElementById("banner").style.transition = "none";
		document.getElementById("topbtn").style.transition = "none";
		document.getElementById("chip-container").style.transition = "none";
		document.getElementById("sidebar").style.transition = "none";
	}

	if (document.body.clientWidth >= 1000) {
		document.getElementById("main").style.marginLeft = "360px";

		try {
			document.getElementById("banner").style.marginLeft = "375px";
			document.getElementById("topbtn").style.left = "385px";
		} catch {
			
		}

		try {
			document.getElementById("chip-container").style.marginLeft = "355px";
		} catch {

		}
	}
	
	document.getElementById("sidebar").style.visibility = "visible";
	document.getElementById("sidebar").style.opacity = "1";

	setSidebarStorage(true);
}

function closeSidebar(useAnim) {
	if (useAnim) {
		document.getElementById("main").style.removeProperty("transition");
		document.getElementById("banner").style.removeProperty("transition");
		document.getElementById("topbtn").style.removeProperty("transition");
		document.getElementById("chip-container").style.removeProperty("transition");
		document.getElementById("sidebar").style.removeProperty("transition");
	} else {
		document.getElementById("main").style.transition = "none";
		document.getElementById("banner").style.transition = "none";
		document.getElementById("topbtn").style.transition = "none";
		document.getElementById("chip-container").style.transition = "none";
		document.getElementById("sidebar").style.transition = "none";
	}
	
	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("sidebar").style.visibility = "hidden";
	document.getElementById("sidebar").style.opacity = "0";
	
	try {
		document.getElementById("banner").style.marginLeft = "20px";
		document.getElementById("topbtn").style.left = "30px";
	} catch {
		
	}

	try {
		document.getElementById("chip-container").style.marginLeft = "0px";
	} catch {

	}

	setSidebarStorage(false);
}
