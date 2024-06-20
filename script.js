
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

// Connects to elements from html file
const command = document.getElementById('command');
const car = document.getElementsByClassName('sRight')[0];
const minion = document.getElementById('minion');
const minlabel = document.getElementById('minlabel');
const links = document.getElementsByClassName('links')[0];
const all = document.getElementsByClassName('left')[0];
const legend = document.getElementById('legend');
const cmd = document.getElementById('command');
const carall = document.getElementById('carall');
const google = document.getElementById('google');

function checkCommand() {
    // Checks what command is written, then executes that
    // r = remove, a = add, p = pause, s = start {r,a} -> elements, {p,s} -> animations
    if (command.value === "pcar") {
        car.style.animationPlayState = "paused";
    }
    else if (command.value === "scar") {
        car.style.animationPlayState = "running";
    }
    else if (command.value === "rcar") {
        carall.style.visibility = "collapse";
    }
    else if (command.value === "acar") {
        carall.style.visibility = "visible";
    }
    else if (command.value === "rminion") {
        minion.style.visibility = "collapse";
        minlabel.style.visibility = "collapse";
    }
    else if (command.value === "aminion") {
        minion.style.visibility = "visible";
        minlabel.style.visibility = "visible";
    }
    else if (command.value === "rlinks") {
        links.style.visibility = "collapse";
    }
    else if (command.value === "alinks") {
        links.style.visibility = "visible";
    }
    else if (command.value === "rlegend") {
        legend.style.visibility = "collapse";
    }
    else if (command.value === "alegend") {
        legend.style.visibility = "visible";
    }
    else if (command.value === "rgoogle") {
        google.style.visibility = "collapse";
    }
    else if (command.value === "agoogle") {
        google.style.visibility = "visible";
    }
    // If you do these the command div disappears too
    else if (command.value === "rall") {
        all.style.visibility = "collapse";
    }
    else if (command.value === "rcmd") {
        cmd.style.visibility = "collapse";
    }
}

// Listens for enter key, then calls checkCommand function
command.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        checkCommand()
        command.value = "";
    }
})

//*

//! Internet + ChatGPT helped make this
// Points on the graph
const xValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const yValues = [20, -5, -20, 15, 0, 10, 0, -5, -10, -20, -25];

// Generate graph
new Chart("graph", {
    type: "line",
    // Actual data
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0.4,
            pointRadius: 2,
            borderColor: "rgba(255, 0, 0, 0.7)",
            data: yValues
        }]
    },
    options: {
        // Made my own legend cuz this one dodgy
        legend: {
            display: false
        },
        // Adds labels for points except for the ending ones (they half out of canvas)
        plugins: {
            datalabels: {
                formatter: function(v, context) {
                    const ends = [0, 100];
                    console.log(ends.includes(context.chart.data.labels[context.dataIndex]));
                    if (ends.includes(context.chart.data.labels[context.dataIndex])) {
                        return '';
                    }
                    else {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                color: '#fff'
            }
        },
        // Get rid of the background lines and axes
        scales: {
            xAxes: [{
                display: false,
                gridLines: {
                    display: false
                },
            }],
            yAxes: [{
                display: false,
                gridLines: {
                    display: false
                },
                ticks : {
                    min: -26,
                    max: 21,
                    stepSize: 1
                },
            }]
        },
    }
});



