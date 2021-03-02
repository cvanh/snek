const socket = io('ws://localhost:8080');

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text) // text is bijv 'hoi'
    
}
for (var m = 3, n = 1E3 / m, p = .5, q = 0, r = !1, t = 0; 30 > t; t++)
    for (var u = 0; 30 > u; u++) {
        var grid = document.createElement("div");
        grid.setAttribute("id", u + "-" + t);
        grid.setAttribute("class", "cell");
        grid.style.width = "2.5vmin";
        grid.style.height = "2.5vmin";
        board.appendChild(grid)
    }
document.addEventListener("keydown", function logKey(e) {
    var key = e.key;
    if (key == "ArrowUp") {
        console.log("arrow up");
        socket.emit('message', key)
    }
    if (key == "ArrowDown") {
        console.log("arrow down");
        socket.emit('message', key)
    }
    if (key == "ArrowLeft") {
        console.log("arrow left");
        socket.emit('message', key)
    }
    if (key == "ArrowRight") {
        console.log("arrow right");
        socket.emit('message', key)
    }
});