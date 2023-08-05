function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const sStyle = window.getComputedStyle(sidebar);

    if (sStyle.visibility == "hidden") {
        if (document.body.clientWidth >= 700) {
            document.getElementById("main").style.marginLeft = "360px";

            try {
                document.getElementById("banner").style.marginLeft = "375px";
                document.getElementById("topbtn").style.left = "385px";
            }
            catch {
                
            }
        }
        
        document.getElementById("sidebar").style.visibility = "visible";
        document.getElementById("sidebar").style.opacity = "1";
    } else {
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("sidebar").style.visibility = "hidden";
        document.getElementById("sidebar").style.opacity = "0";
        
        try {
            document.getElementById("banner").style.marginLeft = "20px";
            document.getElementById("topbtn").style.left = "30px";
        }
        catch {
            
        }
    }
}