
// Updates time
function updateTime() {
    var dt = new Date();
    document.getElementById("time").innerHTML = dt.toLocaleTimeString();
}

// This makes it like 1ms faster on initial load lol
window.addEventListener('DOMContentLoaded', updateTime)

// Constant update
setInterval(updateTime, 1000);

//*

const command = document.getElementById('command');
const car = document.getElementsByClassName('sRight')[0];
const minion = document.getElementById('minion');
const minlabel = document.getElementById('minlabel');

function checkCommand() {
    // Checks what command is written, then executes that
    if (command.value === "stopc") {
        car.style.animationPlayState = "paused";
    }
    else if (command.value === "startc") {
        car.style.animationPlayState = "running";
    }
    else if (command.value === "byeminion") {
        minion.style.visibility = "hidden";
        minlabel.style.visibility = "hidden";
    }
    else if (command.value === "himinion") {
        minion.style.visibility = "visible";
        minlabel.style.visibility = "visible";
    }
}

// Listens for enter key
command.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        checkCommand()
    }
})