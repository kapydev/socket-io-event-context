import { als } from 'asynchronous-local-storage'
import type {Socket, Server} from "socket.io"

export const socketContext = {
    get: als.get,
    set: als.set
}

export type Next = Parameters<Parameters<Server['use']>[0]>[1]

export function socketContextPlugin(socket:Socket, next: Next) {
    socket.use((packet,next) => {
        als.runWith(() => {
            next()
        })
    })
    next()
}
