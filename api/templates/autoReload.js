window.onload = function() {
    eventLoop(document.getElementById("svg"));
};

function eventLoop(svg) {
    fetch("/api/update", {
        method: "GET"
    })
    .then(response => response.text())
    .then(html =>  {
        // only update if the response is not "No new song"
        if (html != "No new song") {
            svg.innerHTML = html;
        }
        setTimeout(eventLoop, 1000, svg);
    });
}