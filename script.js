let infoWindow = document.querySelector('.info-window');
let infoTimer;

message("vanilla script ready")


document.querySelector(".v-2").addEventListener("click", () => message("vanilla element clicked!"))

document.querySelector(".v-3").addEventListener("dblclick", () => message(" vanilla element double clicked!"))

document.addEventListener('keydown', () => document.querySelector('.v-4').textContent = (event.keyCode || event.which))

document.querySelector(".v-5").addEventListener('mousemove',

    function (event) {
        let width = $(this).innerWidth();
        let height = $(this).innerHeight();

        let position = [event.target.offsetTop, event.target.offsetLeft]
        mouseXpercentage = Math.round(((event.pageX - position[1]) / width * 100));
        mouseYpercentage = Math.round(event.pageY - position[0] / height * 100);
        $(this).css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #3498db, #9b59b6)');
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
v10.addEventListener("change", () => message(" you choosed " + v9.value))


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


function message(msg) {
    infoWindow.textContent = msg;
    console.log(msg)
    infoWindow.classList.add("show-info");
    clearTimeout(infoTimer);
    infoTimer = setTimeout(() => infoWindow.classList.remove("show-info"), 1500);
}