import RestManager from "../rest/restManager";
import UserType from "../types/UserType";
import Client from "../index";
export default class UserManager{
    user: UserType;
    rest: RestManager;

    constructor(client: Client, user: UserType){
        this.user = user;
        this.rest = new RestManager(client.token, client.version);
    };

    async createDM(){
        let response = await this.rest.post(`users/${this.user.id}/channels`,{
            type: "dm"
        });
        return response;
    }
    
    async getDMChannel(){
        let response = await this.rest.get(`users/${this.user.id}/channels`);
        return response;
    }
}