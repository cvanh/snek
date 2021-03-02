console.info('js has been planted')
const socket = io('ws://localhost:8080');
let container = document.getElementById("container") // grabs the page

socket.on('message', text => {
    //the message comes in as user said key so we strip this to apply our magic 
    const position = text.slice(-1); //magic
    user = text.slice(0,2); //magic
    // console.log(text); prints the intire message 
    console.log("user: "+user); // gives the user
    console.log("pos: "+position); // and wich command they entered

});
for (let y = 0; y < 10; y++) { // makes the grid format is x-y
    for (let x = 0; x < 10; x++) {
        container.innerHTML += "<div id='" + x +"-"+ y +"' class='cell'></div>"; 
    }
    container.innerHTML += '<br>';
}
    
document.addEventListener("keydown", function logKey(e) { // catches the keyboard event and sends the message to the server with wich key and user
    var key = e.key;
    if (key == "w") {
        // console.log("arrow up");
        socket.emit('message', key)
    }
    if (key == "s") {
        // console.log("arrow down");
        socket.emit('message', key)
    }
    if (key == "a") {
        // console.log("arrow left");
        socket.emit('message', key)
    }
    if (key == "d") {
        // console.log("arrow right");
        socket.emit('message', key)
    }
});

function create_snake(x,y,user){
    document.getElementById(""+ x +"-"+ y +"").innerHTML += user
}
create_snake(7,4,'yz');