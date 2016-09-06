document.getElementById("TOC").className = "mobile-hidden";

var button = document.getElementById("toggle-nav");

button.addEventListener("click", function() {
    var tableOfContents = document.getElementById("TOC");
    var navbar = document.getElementsByClassName("navbar")[0];
    if (tableOfContents.className === "") {
        navbar.id = "";
        tableOfContents.className = "mobile-hidden";
    }
    else {
        navbar.id = "fixed-navbar";
        tableOfContents.className = "";
    }
}, false);
