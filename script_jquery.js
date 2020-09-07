$(function () {

    message("jquery script ready")


    $(".j-2").click(() => message("jquery element clicked! "))

    $(".j-3").dblclick(() => message("jquery element double clicked!"))

    $(".j-6").mousemove(

        function (event) {

            let positionj6 = [event.target.offsetTop, event.target.offsetLeft]
            let width = $(this).innerWidth();
            let height = $(this).innerHeight();
            mouseXpercentage = Math.round(((event.pageX - positionj6[1]) / width * 100));
            mouseYpercentage = Math.round(event.pageY - positionj6[0] / height * 100);
            $(this).css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
        }
    )

    function message(msg) {
        $('.jquery-info-window').text(msg);

        console.log(msg)
        toggleInfoWindow();
        setTimeout(toggleInfoWindow, 1500);
    }

    function toggleInfoWindow() {
        $('.jquery-info-window').toggleClass("show-info");
    }

})