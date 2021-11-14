# Socket IO Context

Access your socket event context anywhere

## Getting Started

Installation

```
npm install socket-io-event-context
```

Enabling the plugin

```js
const { Server } = require("socket.io");
const { socketContext, socketContextPlugin } = require("socket-io-event-context")

const io = new Server({ /* options */ });

io.use(socketContextPlugin) // Register the plugin
```

Usage

```js
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

```

## Acknowledgements

Essentially a simplified port of [fastify-request-context](https://github.com/fastify/fastify-request-context/blob/master/lib/requestContextPlugin.js), kudos to them