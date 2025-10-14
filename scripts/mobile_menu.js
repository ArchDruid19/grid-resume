function showMenu() {
    var top_navbar = document.getElementById("top-navbar");
    if (top_navbar.style.display === "none") {
        top_navbar.style.display = "inline";
        var top_flex_container = document.getElementById("top-flex");
        top_flex_container.style.flexDirection = "column";
    } else {
        top_navbar.style.display = "none";
    }
}


