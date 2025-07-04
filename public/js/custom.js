// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $("body").toggleClass("blur");
    });
});