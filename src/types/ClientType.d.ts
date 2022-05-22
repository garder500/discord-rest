import UserManager from "../manager/UserManager";
export default interface ClientType {
    token: string;
    version: number;
    user?: UserManager;
}
