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