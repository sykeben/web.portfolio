const thisUrl = new URL(window.location);
const backUrl = thisUrl.searchParams.get("backTo");

window.onload = function() {
    if (backUrl != null) {
        $('#close-menu').prop("href", backUrl);
    } else {
        $('#close-menu').prop("href", "index.html");
    }
};