let infoWindow = document.querySelector('.info-window');
let infoTimer;

message("vanilla script ready")


document.querySelector(".v-2").addEventListener("click", () => message("vanilla element clicked!"))

document.querySelector(".v-3").addEventListener("dblclick", () => message(" vanilla element double clicked!"))

document.addEventListener('keydown', () => document.querySelector('.v-4').textContent = (event.keyCode || event.which))

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


let v6 = document.querySelector(".v-6")
v6.addEventListener("input", () => message("User said: " + v6.value))

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

document.querySelector(".v-9").addEventListener("submit", () => message("form submitted!"))

let v10 = document.querySelector(".v-10")
v10.addEventListener("change", () => message(" you choosed " + v10.value))


let v11 = document.querySelector(".v-11")

v11.addEventListener("mouseover", () => v11.classList.toggle("v11-hover1"))

document.querySelector(".v-12").addEventListener('change', function () {

    let value = ""
    if (this.checked) value = 'checked'
    else value = 'unchecked'
    message("checkbox " + value + "!")

})

document.querySelector(".v-13").addEventListener("click", function (event) {
    if (event.target != event.currentTarget) {
        message(event.target.textContent + " clicked!")
    }
})

/* 2 - functios and selectors*/

listF14 = document.querySelector(".ul-f14")

document.querySelector(".v-14").addEventListener("click", function () {
    let appended = listF14.children.length + 1
    let child = document.createElement('li')
    child.innerHTML = `<div class = "vanilla">${appended} elements created</div>`
    listF14.appendChild(child)
    message("element appended using vanilla")
})


document.querySelector('.v-15').addEventListener("click", function () {

    if (listF14.children.length) {
        let children = listF14.children
        children[children.length - 1].remove()
        message("element removed using vanilla")
    }

})

document.querySelector(".v-16").addEventListener("click", function () {
    let prepended = listF14.children.length + 1
    let child = document.createElement('li')
    child.innerHTML = `<div class = "vanilla">${prepended} elements created</div>`
    listF14.prepend(child)
    message("element prepended using vanilla")
})


let liF17 = document.querySelector(".li-f17")
let ulF17 = document.querySelector(".ul-f17")


document.querySelector(".v-17").addEventListener("click", function () {

    let before = document.createElement('li')
    before.innerHTML = `<div class = "vanilla">added before</div>`
    let insertedNode = ulF17.insertBefore(before, liF17.get(0))

})


function insertAfter(newNode, referenceNode) {
    referenceNode.parentElement.insertBefore(newNode, referenceNode.nextSibling);
}

document.querySelector(".v-18").addEventListener("click", function () {

    let after = document.createElement('li')
    after.innerHTML = `<div class = "vanilla">added after</div>`
    insertAfter(after, liF17.get(0))

})

let liF19 = document.querySelector(".li-f19")
let ulF19 = document.querySelector(".ul-f19")

document.querySelector(".v-19").addEventListener("click", function () {

    let clone = liF19.cloneNode(true)
    ulF19.append(clone);

})

let v20Div = document.querySelector(".v-20-div");

document.querySelector(".v-20").addEventListener("click", () => v20Div.classList.add("class20"))
document.querySelector(".v-21").addEventListener("click", () => v20Div.classList.remove("class20"))
document.querySelector(".v-22").addEventListener("click", () => v20Div.classList.toggle("class20"))

let v23Btn = document.querySelector(".v-23-btn")

document.querySelector(".v-23").addEventListener("click", () => v23Btn.setAttribute('disabled', true))

v23Btn.addEventListener("click", () => message("I'm not disabled =)"))

document.querySelector(".v-24").addEventListener("click", () => v23Btn.removeAttribute('disabled'))



let f25Img = document.querySelector('.f-25-img');

document.querySelector(".v-25").addEventListener("click", function () {
    f25Img.setAttribute("data-src", "images/monkey.png");
    message("data source set to " + f25Img.getAttribute("data-src"))
})


document.querySelector(".v-26").addEventListener("click", function () {
    f25Img.removeAttribute("data-src", "images/monkey.png");
    message("data source removed")

})

let v27Div = document.querySelector(".v-27-div")

document.querySelector(".v-27").addEventListener("click", () => v27Div.classList.add('hidden'))
document.querySelector(".v-28").addEventListener("click", () => v27Div.classList.remove('hidden'))

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




/*UTILS*/

function message(msg) {
    infoWindow.textContent = msg;
    console.log(msg)
    infoWindow.classList.add("show-info");
    clearTimeout(infoTimer);
    infoTimer = setTimeout(() => infoWindow.classList.remove("show-info"), 1500);
}