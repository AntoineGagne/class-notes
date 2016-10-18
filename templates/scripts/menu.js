window.onload = function () {
    document.getElementById("TOC").className = "mobile-hidden";

    const button = document.getElementById("toggle-nav");

    button.addEventListener("click", function() {
        const tableOfContents = document.getElementById("TOC");
        const navbar = document.getElementsByClassName("navbar")[0];
        if (tableOfContents.className === "") {
            navbar.id = "";
            tableOfContents.className = "mobile-hidden";
        }
        else {
            navbar.id = "fixed-navbar";
            tableOfContents.className = "";
        }
    }, false);
}
