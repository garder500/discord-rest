import { Client } from "../structures/Client";
import { UserType } from "../types/UserType";
import { User } from "../structures/User";

export class UserController {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    async fetch(id: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
             this.client.rest.get<UserType>(`users/${id}`).then((user) => {
                 resolve(new User(this.client, user));
             }).catch(err => {
                 reject(err);
             });
         });
     }

}