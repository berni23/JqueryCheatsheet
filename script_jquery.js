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

    $(".img-e7").on("load", () => message("image succesfully loaded"))
    $(".img-e7").on("error", () => {

        message("image could not be loaded")
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

        if (event.target != event.currentTarget) message(event.target.textContent + " clicked!")
    })
    /* 2 - functions and selectors*/

    let listF14 = $('.ul-f14')
    $(".j-14").click(() => {

        let appended = listF14.children().length + 1
        listF14.append($(`<li><div class = "jquery">${appended} elements created</div></li>`))
        message("element appended using jquery")

    })

    $('.j-15').click(function () {

        if (listF14.children().length) {
            let children = listF14.children()
            children[children.length - 1].remove()
            message("element removed using jquery")
        }
    })

    $('.j-16').click(function () {

        let prepended = listF14.children().length + 1
        listF14.prepend($(`<li><div class = "jquery">${prepended} elements created</div></li>`))
        message("element prepended using jquery")
    })

    liF17 = $('.li-f17')
    $(".j-17").click(function () {
        liF17.before($(`<li><div class = "jquery">added before</div></li>`))
    })

    $(".j-18").click(function () {
        liF17.after($(`<li><div class = "jquery">added after</div></li>`))
    })

    let ulF19 = $(".ul-f19");
    let liF19 = $(".li-f19");
    $(".j-19").click(function () {

        let cloned = liF19.clone()
        ulF19.append(cloned)
    })

    let j20Div = $(".j-20-div");

    $(".j-20").click(() => j20Div.addClass("class20"))
    $(".j-21").click(() => j20Div.removeClass("class20"))
    $(".j-22").click(() => j20Div.toggleClass("class20"))

    let j23Btn = $(".j-23-btn")

    $(".j-23").click(() => j23Btn.prop('disabled', true))
    $(".j-23-btn").click(() => message("im not disabled =)"))
    $(".j-24").click(function () {
        j23Btn.prop('disabled', false)
        j23Btn.removeAttr('disabled')
    })

    let f25Img = $('.f-25-img')
    $(".j-25").click(function () {

        f25Img.attr("data-src", "images/tiger.png");
        message("data source set to " + f25Img.attr("data-src"))
    })
    $(".j-26").click(function () {

        f25Img.removeData('src')
        f25Img.removeAttr('data-src')
        message("data source removed")

    })

    let j27Div = $(".j-27-div")
    $(".j-27").click(() => j27Div.addClass('hidden'))
    $(".j-28").click(() => j27Div.removeClass('hidden'))

    /* UTILS*/
    function message(msg) {
        infoWindow.text(msg);
        console.log(msg)
        infoWindow.addClass("show-info");
        clearTimeout(infoTimer);
        infoTimer = setTimeout(() => infoWindow.removeClass("show-info"), 1500);
    }
})