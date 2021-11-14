const { Server } = require("socket.io");
const { socketContext, socketContextPlugin } = require("socket-io-event-context")

const io = new Server({ /* options */ });

io.use(socketContextPlugin) // Register the plugin

function getUser() {
    //Notice how it does not need access to the socket object
    return socketContext.get("user")
}

io.on("connection", (socket) => {

    socket.on("your-event", (...args) => {
        socketContext.set("user", {id: "helloUser"})
        console.log(getUser())
    })
});

io.listen(3000)