$(function () {


    let infoWindow = $('.jquery-info-window')
    let infoTimer;


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

    $(".j-6").on("input", () => message("User said : " + $('.j-6').val()))

    let arrJ7 = ["images/lion.jpg", "images/monkey.jpg", "images/tiger.jpg"]
    let imgJ7 = 0
    let error = "images/error.png"

    $(".j-7").click(function () {


        $('.img-e7').attr("src", arrJ7[imgJ7]);

        if (!arrJ7[imgJ7]) {
            message("image could not be uploaded");
            $('.img-e7').attr("src", error);
            imgJ7 = 0;
        }

        imgJ7++
    })


    $(".j-9").submit(() => message("form submitted!"))

    $(".j-10").change(() => message(" you choosed " + $(this).children().find(":selected").text()))


    let move = true;
    $(".j-11").mouseover(function () {

        if (move) {
            $(this).animate({
                top: "+=30px"
            }, 500);
            move = false
        } else {
            $(this).animate({
                top: "-=30px",
            }, 500);
            move = true

        }

    })

    $(".j-12").change(function () {

        console.log('jquery checkbox')
        let value = ''
        if ($(this).prop('checked')) value = 'checked'

        else value = 'unchecked'

        message("checkbox " + value + "!")

    })

    $(".j-13").click(function (event) {

        if (event.target != event.currentTarget) {
            message(event.target.textContent + " clicked!")
        }
    })
    /* 2 - functions and selectors*/

    let listF14 = $('.ul-f14')
    $(".j-14").click(() => {

        let appended = listF14.children().length + 1
        listF14.append($(`<li><div class = "jquery">${appended} elements appended</div></li>`))
    })

    $('.reset-f14').click(() => listF14.empty())


    /* UTILS*/

    function message(msg) {
        infoWindow.text(msg);
        console.log(msg)
        infoWindow.addClass("show-info");
        clearTimeout(infoTimer);
        infoTimer = setTimeout(() => infoWindow.removeClass("show-info"), 1500);
    }


})