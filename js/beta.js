const noShowBeta = window.localStorage.getItem("noBetaMessage");
const betaModal = "#beta-modal";

window.onload = function() {
    if (noShowBeta === null || noShowBeta === "0") {
        $(betaModal).modal('show');
    };
};

$(betaModal).on('hide.bs.modal', function(e) {
    const betaChecked = $("#beta-no-show").prop('checked');
    if (betaChecked) {
        window.localStorage.setItem("noBetaMessage", "1");
    } else {
        window.localStorage.setItem("noBetaMessage", "0");
    };
});