
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("navbar-toggler").addEventListener("collapse", function (event) {
        console.log("hello world");
        var screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            document.querySelector("#collapse navbar-collapse").collapse('collapse');
        }
    });
});