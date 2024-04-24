setInterval(() => {
    let d = new Date();
    let elements = document.getElementsByClassName("datime");
    let dateElements = document.getElementsByClassName("dadate");

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = d.toLocaleTimeString();
    }

    for (let i = 0; i < dateElements.length; i++) {
        let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        dateElements[i].innerHTML = d.toLocaleDateString('en-US', options);
    }
}, 1000);