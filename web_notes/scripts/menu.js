document.getElementById("TOC").className = "mobile-hidden";

var button = document.getElementById("toggle-nav");

button.addEventListener("click", function() {
    var tableOfContents = document.getElementById("TOC");
    var content = document.getElementsByClassName("level1");
    var header = document.getElementsByTagName("header")[0];
    var introduction_text = document.getElementsByTagName("p")[0];
    var navbar = document.getElementsByClassName("navbar")[0];
    if (tableOfContents.className === "") {
        for (var i = 0; i < content.length; ++i) {
            content[i].className += "";
            content[i].className = "level1";
        }
        introduction_text.className = "";
        header.className = "";
        navbar.id = "";
        tableOfContents.className = "mobile-hidden";
    }
    else {
        for (var i = 0; i < content.length; ++i) {
            content[i].className += " mobile-hidden";
        }
        introduction_text.className = "mobile-hidden";
        header.className = "mobile-hidden";
        navbar.id = "fixed-navbar";
        tableOfContents.className = "";
    }
}, false);
