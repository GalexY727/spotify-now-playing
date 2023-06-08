window.onload = function() {
    eventLoop(document.getElementById("svg"));
};

function eventLoop(svg) {
    fetch("/update", {
        method: "GET"
    })
    .then(response => response.text())
    .then(html =>  {
        svg.innerHTML = html;
        fetch("/time", {
            method: "GET"
        })
        .then(response => response.text())
        .then(time => {
            time = parseInt(time) + 1000;
            console.log("Time left in song: " + time/1000 + " seconds");
            setTimeout(eventLoop, time, svg);
        });
    });
}