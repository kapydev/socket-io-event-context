"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketContextPlugin = exports.socketContext = void 0;
var asynchronous_local_storage_1 = require("asynchronous-local-storage");
exports.socketContext = {
    get: asynchronous_local_storage_1.als.get,
    set: asynchronous_local_storage_1.als.set
};
function socketContextPlugin(socket, next) {
    socket.use(function (packet, next) {
        asynchronous_local_storage_1.als.runWith(function () {
            next();
        });
    });
    next();
}
exports.socketContextPlugin = socketContextPlugin;
