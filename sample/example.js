const { Server } = require("socket.io");

const { socketContext, socketContextPlugin } = require("../socketContextPlugin")

const io = new Server({ /* options */ });

io.use(socketContextPlugin)

io.on("connection", (socket) => {

    socket.emit("yoyo", "bozo")
    
    socket.on("yoyo", (...args) => {
        socketContext.set("bah", "dah")
        console.log(getBah())
    })
});

function getBah() {
    return socketContext.get("bah")
}


io.listen(3000);