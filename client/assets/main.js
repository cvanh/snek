const socket = io('ws://localhost:8080');

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text)
    
}

document.addEventListener("keydown", function logKey(e) {
    var key = e.key;
    if (key == "ArrowUp") {
        console.log("arrow up");
        socket.emit('arrow up', key)
    }
    if (key == "ArrowDown") {
        console.log("arrow down");
    }
    if (key == "ArrowLeft") {
        console.log("arrow left");
    }
    if (key == "ArrowRight") {
        console.log("arrow right");
    }
});