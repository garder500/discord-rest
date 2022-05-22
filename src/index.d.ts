import RestManager from "./rest/restManager";
import ClientType from "./types/ClientType";
export * from "./types/UserType";
export * from "./types/ClientType";
export * from "./rest/restManager";
export default class Client {
    token: string;
    version: number | undefined;
    rest: RestManager;
    constructor(options: ClientType);
}
