import type { Socket, Server } from "socket.io";
export declare const socketContext: {
    get: <T>(key: string) => T | undefined;
    set: <T_1>(key: string, value: T_1) => void;
};
export declare type Next = Parameters<Parameters<Server['use']>[0]>[1];
export declare function socketContextPlugin(socket: Socket, next: Next): void;
