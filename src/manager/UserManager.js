"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restManager_1 = __importDefault(require("../rest/restManager"));
class UserManager {
    constructor(client, user) {
        this.user = user;
        this.rest = new restManager_1.default(client.token, client.version);
    }
    ;
    createDM() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.rest.post(`users/${this.user.id}/channels`, {
                type: "dm"
            });
            return response;
        });
    }
    getDMChannel() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield this.rest.get(`users/${this.user.id}/channels`);
            return response;
        });
    }
}
exports.default = UserManager;
