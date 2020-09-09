document.addEventListener("DOMContentLoaded", function () {


    let infoWindow = document.querySelector('.info-window');
    let infoTimer;

    // v-n means dealing with exercise n in javascript vanilla


    /*------------------------------
    1-Events
    ----------------------------*/

    // v1 ---------------------------------

    message("vanilla script ready")

    // v2 ---------------------------------

    document.querySelector(".v-2").addEventListener("click", () => message("vanilla element clicked!"))

    // v3 ---------------------------------

    document.querySelector(".v-3").addEventListener("dblclick", () => message(" vanilla element double clicked!"))

    // v4 ---------------------------------
    document.addEventListener('keydown', () => document.querySelector('.v-4').textContent = (event.keyCode || event.which))


    // v5 ---------------------------------
    document.querySelector(".v-5").addEventListener('mousemove',

        function (event) {
            let width = this.offsetWidth;
            let height = this.offsetHeight;

            let position = [event.target.offsetTop, event.target.offsetLeft]
            mouseXpercentage = Math.round(((event.pageX - position[1]) / width * 100));
            mouseYpercentage = Math.round(event.pageY - position[0] / height * 100);
            this.style.background = 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)';
        }
    )


    // v6 ---------------------------------
    let v6 = document.querySelector(".v-6")
    v6.addEventListener("input", () => message("User said: " + v6.value))

    // v7-8 ---------------------------------
    let arrV7 = ["images/earth.jpg", "images/moon.jpg", "images/saturn.jpeg"]
    let imgV7 = 0
    let imgE7 = document.querySelector(".img-e7")

    imgE7.addEventListener("load", () => message("image succesfully loaded !"))

    imgE7.addEventListener("error", function () {

        message("image could not be loaded")
        imgV7 = 0
    })
    document.querySelector(".v-7").addEventListener("click", function () {

        imgE7.src = arrV7[imgV7];
        imgV7++

    })

    // v9 ---------------------------------
    document.querySelector(".v-9").addEventListener("submit", () => message("form submitted!"))

    // v10 ---------------------------------
    let v10 = document.querySelector(".v-10")
    v10.addEventListener("change", () => message(" you choosed " + v10.value))


    // v11 ---------------------------------
    let v11 = document.querySelector(".v-11")

    v11.addEventListener("mouseover", () => v11.classList.toggle("v11-hover1"))

    // v12 ---------------------------------
    document.querySelector(".v-12").addEventListener('change', function () {

        let value = ""
        if (this.checked) value = 'checked'
        else value = 'unchecked'
        message("checkbox " + value + "!")

    })

    // v13 ---------------------------------
    document.querySelector(".v-13").addEventListener("click", function (event) {
        if (event.target != event.currentTarget) {
            message(event.target.textContent + " clicked!")
        }
    })

    /*----------------------------------
        2 - functios and selectors
    ---------------------------------*/


    // v14---------------------------------
    listF14 = document.querySelector(".ul-f14")

    document.querySelector(".v-14").addEventListener("click", function () {
        let appended = listF14.children.length + 1
        let child = document.createElement('li')
        child.innerHTML = `<div class = "vanilla">${appended} elements created</div>`
        listF14.appendChild(child)
        message("element appended using vanilla")
    })

    // v15---------------------------------
    document.querySelector('.v-15').addEventListener("click", function () {

        if (listF14.children.length) {
            let children = listF14.children
            children[children.length - 1].remove()
            message("element removed using vanilla")
        }

    })

    // v16---------------------------------
    document.querySelector(".v-16").addEventListener("click", function () {
        let prepended = listF14.children.length + 1
        let child = document.createElement('li')
        child.innerHTML = `<div class = "vanilla">${prepended} elements created</div>`
        listF14.prepend(child)
        message("element prepended using vanilla")
    })

    // v17---------------------------------
    let liF17 = document.querySelector(".li-f17")
    let ulF17 = document.querySelector(".ul-f17")

    document.querySelector(".v-17").addEventListener("click", function () {

        let before = document.createElement('li')
        before.innerHTML = `<div class = "vanilla">added before</div>`
        let insertedNode = ulF17.insertBefore(before, liF17)

    })

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentElement.insertBefore(newNode, referenceNode.nextSibling);
    }

    // v18---------------------------------
    document.querySelector(".v-18").addEventListener("click", function () {

        let after = document.createElement('li')
        after.innerHTML = `<div class = "vanilla">added after</div>`
        insertAfter(after, liF17.get(0))

    })

    // v19---------------------------------
    let liF19 = document.querySelector(".li-f19")
    let ulF19 = document.querySelector(".ul-f19")

    document.querySelector(".v-19").addEventListener("click", function () {

        let clone = liF19.cloneNode(true)
        ulF19.append(clone);

    })

    // v20---------------------------------
    let v20Div = document.querySelector(".v-20-div");

    document.querySelector(".v-20").addEventListener("click", () => v20Div.classList.add("class20"))
    // v21---------------------------------
    document.querySelector(".v-21").addEventListener("click", () => v20Div.classList.remove("class20"))
    // v22---------------------------------
    document.querySelector(".v-22").addEventListener("click", () => v20Div.classList.toggle("class20"))

    // v23---------------------------------
    let v23Btn = document.querySelector(".v-23-btn")

    document.querySelector(".v-23").addEventListener("click", () => v23Btn.setAttribute('disabled', true))

    v23Btn.addEventListener("click", () => message("I'm not disabled =)"))

    // v24---------------------------------
    document.querySelector(".v-24").addEventListener("click", () => v23Btn.removeAttribute('disabled'))

    // v25---------------------------------
    let f25Img = document.querySelector('.f-25-img');

    document.querySelector(".v-25").addEventListener("click", function () {
        f25Img.setAttribute("data-src", "images/monkey.png");
        message("data source set to " + f25Img.getAttribute("data-src"))
    })


    // v26---------------------------------
    document.querySelector(".v-26").addEventListener("click", function () {
        f25Img.removeAttribute("data-src", "images/monkey.png");
        message("data source removed")

    })

    // v27---------------------------------
    let v27Div = document.querySelector(".v-27-div")

    document.querySelector(".v-27").addEventListener("click", () => v27Div.classList.add('hidden'))
    // v28---------------------------------
    document.querySelector(".v-28").addEventListener("click", () => v27Div.classList.remove('hidden'))
    //( 29 and 30 are only for jquery)
    // v31---------------------------------
    let collectionJ31 = Array.from(document.getElementsByClassName("ref-31-div"));

    document.querySelector(".v-31").addEventListener("click", () => collectionJ31.forEach(function (el) {
        el.style.color = "lightgreen"
        el.style.backgroundColor = "white"
    }))


    let f32 = document.querySelector(".f-32-span")

    document.querySelector(".v-32").addEventListener("click", () => f32.parentElement.style.fontWeight = "normal")

    let f33 = document.querySelector(".f-33-ul");

    document.querySelector(".v-33").addEventListener("click", () => Array.from(f33.children).forEach((el) => el.style.fontWeight = "normal"))


    let ref34Div = document.querySelector(".ref-34-div")
    document.querySelector(".j-34").addEventListener('click', function () {

        for (i = 0; i < ref34Div.length; i++) {

            ref34Div[i].style.fontWeight = "normal"
        }
    })

    let font35 = document.getElementById("35-font")

    document.querySelector(".v-35").addEventListener("click", () => font35.style.fontWeight = "normal")

    let list36None = document.querySelectorAll('[class*="list-36"][style*="display:none"]')

    document.querySelector('.v-36').addEventListener("click", function () {

        for (let i = 0; i < list36None.length; i++) {
            list36None[i].style.color = "blue"
        }
    })


    document.querySelector('.v-37').addEventListener("click", function () {

        let selected37 = document.querySelectorAll('.select-37 > option:checked')
        let strSelected = "Selected options "
        for (i = 0; i < selected37.length; i++) {

            strSelected += selected37[i].textContent + " "
        }
        message(strSelected)
    })

    document.querySelector('.v-38').addEventListener("click", function () {

        document.querySelector(".f-38-ul >li>a").setAttribute("href", "http://www.neuralink.com");
        message(" first link changed to neuralink website")

    })

    document.querySelector('.v-39').addEventListener("click", function () {
        let input = document.querySelector('input');
        window.alert(input.getAttribute("value"))
    })

    document.querySelector('.v-40').addEventListener("click", function () {

        let inputRemove = document.querySelectorAll('li>span[style*="color:green"]')
        for (let i = 0; i < inputRemove.length; i++) inputRemove[i].remove()

    })

    setTimeout(function () {
        document.querySelector("main").classList.add("main-onLoad");
    }, 2000)


    /*UTILS*/

    function message(msg) {
        infoWindow.textContent = msg;
        infoWindow.classList.add("show-info");
        clearTimeout(infoTimer);
        infoTimer = setTimeout(() => infoWindow.classList.remove("show-info"), 1500);
    }


});