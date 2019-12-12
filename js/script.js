$(document).ready(function () {

    // Popover hint
    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    // Int scrollspy
    $("body").scrollspy({
        target: "#navigation"
    });

    // Scrolling navigation
    $("#navigation a").on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            const hash = this.hash;

            $("html, body").animate({
                    scrollTop: $(hash).offset().top
                },
                800,
                function () {
                    window.location.hash = hash;
                });
        }
    });

    // Navbar collapse on link click
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //document.ready ends here
});