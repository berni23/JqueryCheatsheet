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
let error = "images/error.png"
let imgV7 = 0
let imgE7 = document.querySelector(".img-e7")

document.querySelector(".v-7").addEventListener("click", function () {

    imgE7.src = arrV7[imgV7];
    if (!arrV7[imgV7]) {
        message("image could not be loaded")
        imgV7 = 0;
        imgE7.src = error
    }

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
    child.innerHTML = `<div class = "vanilla">${appended} elements appended</div>`
    listF14.appendChild(child)
})


// display a message to the user


function message(msg) {
    infoWindow.textContent = msg;
    console.log(msg)
    infoWindow.classList.add("show-info");
    clearTimeout(infoTimer);
    infoTimer = setTimeout(() => infoWindow.classList.remove("show-info"), 1500);
}