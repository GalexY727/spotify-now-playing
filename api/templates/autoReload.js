window.onload = function() {
    eventLoop(document.getElementById("svg"));
};

function eventLoop(svg) {
    fetch("/api/spotify/update", {
        method: "GET"
    })
    .then(response => response.text())
    .then(html =>  {
        svg.innerHTML = html;
        // fetch("/api/spotify/time", {
        //     method: "GET"
        // })
        // .then(response => response.text())
        // .then(time => {
        //     time = parseInt(time) + 3000;
        //     console.log("Time left in song: " + time/1000 + " seconds");
        //     // if time is NaN set it to 600000
        //     if (isNaN(time)) {
        //         time = 600000;
        //     }
        // });
        setTimeout(eventLoop, 1000, svg);
    });
}