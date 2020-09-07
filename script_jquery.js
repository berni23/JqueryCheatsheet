$(function () {


    /* 1 - events */

    message("jquery script ready")

    $(".j-2").click(() => message("jquery element clicked! "))

    $(".j-3").dblclick(() => message("jquery element double clicked!"))

    $(window).keydown(() => $('.j-4').text(event.keyCode || event.which))

    $(".j-5").mousemove(

        function (event) {

            let positionj6 = [event.target.offsetTop, event.target.offsetLeft]
            let width = $(this).innerWidth();
            let height = $(this).innerHeight();
            mouseXpercentage = Math.round(((event.pageX - positionj6[1]) / width * 100));
            mouseYpercentage = Math.round(event.pageY - positionj6[0] / height * 100);
            $(this).css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
        }
    )

    /* 2 - functions and slelectors*/

    let listE6 = $('.ul-e6')
    $(".j-6").click(() => {

        let appended = listE6.children().length + 1
        listE6.append($(`<li><div class = "jquery">${appended} elements appended</div></li>`))
    })

    $('.reset-e6').click(() => listE6.empty())



    /* UTILS*/


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