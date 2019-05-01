var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
navItems.forEach(function (e, i) {
    e.addEventListener("click", function (e) {
        navItems.forEach(function (e2, i2) {
            e2.classList.remove("mobile-bottom-nav__item--active");
        })
        this.classList.add("mobile-bottom-nav__item--active");
    });
});




//var acc = document.getElementsByClassName("accordion");
//var i;

//for (i = 0; i < acc.length; i++) {
//    acc[i].addEventListener("click", function () {
//        this.classList.toggle("active");
//        var panel = this.nextElementSibling;
//        if (panel.style.maxHeight) {
//            panel.style.maxHeight = null;
//        } else {
//            panel.style.maxHeight = panel.scrollHeight + "px";
//        }
//    });
//}