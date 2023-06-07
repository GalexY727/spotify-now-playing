window.onLoad = function() {
        console.log("INIT :D")
        let time = 10000;
        const svg = document.getElementById("svg")
        setInterval((event) => {
            event.preventDefault();
            fetch("/update", {
                method: "GET"
            })
            .then(response => 
                response.text();
            )
            .then(html =>  {
                svg.innerHTML = html;
                fetch("/time", {
                    method: "GET"
                })
                .then(response => 
                    response.text();
                )
                .then(time => {
                    this.time = time;
                    console.log("Time left in song: " + time + " seconds, this.time = " + this.time)
                })
            })
            
        }, time)
    }
