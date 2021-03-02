console.info('js has been planted')
const socket = io('ws://localhost:8080');


socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

// document.querySelector('button').onclick = () => {

//     const text = document.querySelector('input').value;
//     socket.emit('message', text) // text is bijv 'hoi'
    
// }
let container = document.getElementById("container");
for (let index = 0; index < array.length; index++) {
    container.innerHTML += "<div class='cell'></div>";
    
}
// for (var index = 0; 10 < index; index++) {
//     console.log('papier')
//     for (var x = 0; 10 < x; x++) {
//         console.log('steen')
//         container.innerHTML += "<div class='cell'></div>";
//     }
// container.innerHTML += "<br>";
// }

    
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