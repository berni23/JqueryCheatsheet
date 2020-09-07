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

/* 2 - functios and slelectors*/


listE6 = document.querySelector(".ul-e6")

document.querySelector(".v-6").addEventListener("click", function () {


        let appended = listE6.children.length + 1
        let child = document.createElement('li')
        child.innerHTML = `<div class = "vanilla">${appended} elements appended</div>`
        listE6.appendChild(child)
    }

)




$('.reset-e6').click(() => $(this).empty())

// display a message to the user
function message(msg) {
    document.querySelector('.info-window').textContent = msg;
    toggleInfoWindow();
    setTimeout(toggleInfoWindow, 1500);
}

function toggleInfoWindow() {
    document.querySelector('.info-window').classList.toggle("show-info");
}