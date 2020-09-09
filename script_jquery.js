$(function () {

    let infoWindow = $('.jquery-info-window')
    let infoTimer;

    // j-n  label states for exercise n performed using jquery library

    /*
    ----------------------------
    1 - Events
    -----------------------------
    */

    //j1 ----------------------------
    message("jquery script ready")
    //j2 ----------------------------
    $(".j-2").click(() => message("jquery element clicked! "))
    //j3 ----------------------------
    $(".j-3").dblclick(() => message("jquery element double clicked!"))
    //j4 ----------------------------
    $(window).keydown(() => $('.j-4').text(event.keyCode || event.which))
    //j5 ----------------------------
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

    //j6 ----------------------------
    $(".j-6").on("input", () => message("User said : " + $('.j-6').val()))
    //j7-8 ----------------------------
    $(".img-e7").on("load", () => message("image succesfully loaded"))
    $(".img-e7").on("error", () => {

        message("image could not be loaded")
    })

    //j9 ----------------------------
    $(".j-9").submit(() => message("form submitted!"))
    //j10 ----------------------------
    $(".j-10").change(() => message("you choosed " + $('.j-10').val()))
    //j11 ----------------------------
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
    //j12 ----------------------------
    $(".j-12").change(function () {

        let value = ''
        if ($(this).prop('checked')) value = 'checked'
        else value = 'unchecked'
        message("checkbox " + value + "!")

    })
    //j13 ----------------------------
    $(".j-13").click(function (event) {

        if (event.target != event.currentTarget) message(event.target.textContent + " clicked!")
    })

    /* -----------------------------------------
    2 - functions and selectors
    --------------------------------------*/

    //j14 ----------------------------
    let listF14 = $('.ul-f14')
    $(".j-14").click(() => {

        let appended = listF14.children().length + 1
        listF14.append($(`<li><div class = "jquery">${appended} elements created</div></li>`))
        message("element appended using jquery")

    })
    //j15 ----------------------------
    $('.j-15').click(function () {

        if (listF14.children().length) {
            let children = listF14.children()
            children[children.length - 1].remove()
            message("element removed using jquery")
        }
    })
    //j16 ----------------------------
    $('.j-16').click(function () {

        let prepended = listF14.children().length + 1
        listF14.prepend($(`<li><div class = "jquery">${prepended} elements created</div></li>`))
        message("element prepended using jquery")
    })
    //j17 ----------------------------
    liF17 = $('.li-f17')
    $(".j-17").click(function () {
        liF17.before($(`<li><div class = "jquery">added before</div></li>`))
    })
    //j18 ----------------------------
    $(".j-18").click(function () {
        liF17.after($(`<li><div class = "jquery">added after</div></li>`))
    })
    //j19 ----------------------------
    let ulF19 = $(".ul-f19");
    let liF19 = $(".li-f19");
    $(".j-19").click(function () {

        let cloned = liF19.clone()
        ulF19.append(cloned)
    })
    //j20----------------------------
    let j20Div = $(".j-20-div");

    $(".j-20").click(() => j20Div.addClass("class20"))
    //j21----------------------------
    $(".j-21").click(() => j20Div.removeClass("class20"))
    //j22----------------------------
    $(".j-22").click(() => j20Div.toggleClass("class20"))
    //j23----------------------------
    let j23Btn = $(".j-23-btn")

    $(".j-23").click(() => j23Btn.prop('disabled', true))
    $(".j-23-btn").click(() => message("im not disabled =)"))
    //j24----------------------------
    $(".j-24").click(function () {
        j23Btn.prop('disabled', false)
        j23Btn.removeAttr('disabled')
    })
    //j25----------------------------
    let f25Img = $('.f-25-img')
    $(".j-25").click(function () {

        f25Img.attr("data-src", "images/tiger.png");
        message("data source set to " + f25Img.attr("data-src"))
    })
    //j26----------------------------
    $(".j-26").click(function () {

        f25Img.removeData('src')
        f25Img.removeAttr('data-src')
        message("data source removed")

    })
    //j27----------------------------
    let j27Div = $(".j-27-div")
    $(".j-27").click(() => j27Div.addClass('hidden'))
    //j28----------------------------
    $(".j-28").click(() => j27Div.removeClass('hidden'))
    //j29----------------------------
    let j29Div = $(".j-29-div")

    $(".j-29").click(() => j29Div.fadeIn(500))
    //j30----------------------------
    $(".j-30").click(() => j29Div.fadeOut(500))

    //j31----------------------------
    let collectionJ31 = $(".ref-31-div");

    $(".j-31").click(function () {

        for (i = 0; i < collectionJ31.length; i++) {
            $(collectionJ31[i]).css({
                backgroundColor: "lightgreen",
                color: "white"
            })
        }
    })
    //j32----------------------------
    let f32 = $(".f-32-span")
    $(".j-32").click(() => f32.parent().css("fontWeight", "bold"))
    //j33----------------------------
    let f33 = $(".f-33-ul");
    let children33 = f33.children()

    $(".j-33").click(function () {
        for (i = 0; i < children33.length; i++) {
            $(children33[i]).css('fontWeight', "bold")

        }
    })
    //j34----------------------------
    let ref34Div = $(".ref-34-div")
    $(".j-34").click(function () {
        for (i = 0; i < ref34Div.length; i++) {
            $(ref34Div[i]).css('fontWeight', "bold")
        }
    })

    //j35----------------------------
    let font35 = $("#35-font")
    $(".j-35").click(() => font35.css("fontWeight", "bold"))
    let list36None = $('[class*="list-36"][style*="display:none"]')

    //j36----------------------------
    $('.j-36').click(function () {

        for (let i = 0; i < list36None.length; i++) {
            $(list36None[i]).css("color", "green")
        }
    })

    //j37----------------------------
    $('.j-37').click(function () {

        let selected37 = $('.select-37 > option:checked')
        let strSelected = "Selected options "
        for (i = 0; i < selected37.length; i++) {

            strSelected += selected37.text() + " "
        }
        message(strSelected)
    })

    //j38----------------------------
    $('.j-38').click(function () {

        $(".f-38-ul:first a").attr("href", "http://www.assemblerschool.com/")
        message(" first link changed to assembler website")

    })

    //j39----------------------------
    $('.j-39').click(function () {

        let input = $('input:first')
        window.alert(input.attr("value"))
    })
    //j40----------------------------
    $('.j-40').click(function () {
        let inputRemove = $('li>span[style*="color:blue"]')
        for (let i = 0; i < inputRemove.length; i++) $(inputRemove[i]).remove()

    })

    setTimeout(function () {

        $('.title').animate({

                opacity: "1",
                marginRight: "0",
                display: "visible",
            },

            1000
        )
    }, 2000)

    /* UTILS*/
    function message(msg) {
        infoWindow.text(msg);
        infoWindow.addClass("show-info");
        clearTimeout(infoTimer);
        infoTimer = setTimeout(() => infoWindow.removeClass("show-info"), 1500);
    }
})