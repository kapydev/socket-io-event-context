const { als } = require('asynchronous-local-storage')
const { AsyncResource } = require('async_hooks')
const asyncResourceSymbol = Symbol('asyncResource')

const socketContext = {
    get: als.get,
    set: als.set
}

function socketContextPlugin(socket, next) {
    socket.use((packet,next) => {
        als.runWith(() => {
            next()
        })
    })
    next()
}

module.exports = {socketContext,socketContextPlugin}