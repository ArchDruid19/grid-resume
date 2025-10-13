function showMenu() {
    var x = document.getElementById("top-navbar");
    if (window.innerWidth < 800) {
        if (x.style.display === "none") {
            x.style.display = "inline";
            var y = document.getElementById("top-flex");
            y.style.flexDirection = "column";
        } else {
            x.style.display = "none";
        }

    } else {
        x.style.display = "flex";
    }

}

