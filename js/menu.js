const thisUrl = new URL(window.location);
const backUrl = thisUrl.searchParams.get("backTo");

const links = document.getElementsByClassName("menu-link")

window.onload = function() {

    if (backUrl != null) {
        $('#close-menu').prop("href", backUrl);
        for (var i=0; i<links.length; i++) {
            if (links[i].getAttribute("href") == backUrl) {
                links[i].setAttribute("class", links[i].getAttribute("class") + " active");
            };
        };
    } else {
        $('#close-menu').prop("href", "index.html");
    };

};