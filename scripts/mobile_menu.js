function showMenu() {
    var x = document.getElementById("top-navbar");
    if (x.style.display === "none") {
        x.style.display = "inline";
        var y = document.getElementById("top-flex");
        y.style.flexDirection = "column";
    } else {
        x.style.display = "none";
    }
}

