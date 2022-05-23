import { Client } from "../index";
import UserType from "../types/UserType";
import User from "../structures/User";

export default class UserController {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async get(id: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
             this.client.rest.get<UserType>(`users/${id}`).then((user) => {
                 resolve(new User(this.client, user));
             }).catch(err => {
                 reject(err);
             });
         });
     }

}