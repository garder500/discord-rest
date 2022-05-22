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
const request_1 = __importDefault(require("../utils/request"));
const form_data_1 = __importDefault(require("form-data"));
class RestManager {
    constructor(token, version = 10) {
        this.baseURL = `https://discord.com/api/v${version}/`;
        this.token = token;
        this.version = version;
        this.headers = {
            "Authorization": `Bot ${this.token}`,
            "User-Agent": "DiscordBot (bot-creator, 0.0.1)"
        };
    }
    // make a function that can be used to make a GET request to the API using the baseURL and the endpoint with fetch
    // the headers are set in the function and are the default headers
    // the function returns a promise that resolves to the response
    request(endpoint, method, body = null) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.baseURL + endpoint;
            let options = {
                method: method,
                headers: this.headers
            };
            if (body) {
                if (body instanceof form_data_1.default) {
                    options.headers['Content-Type'] = 'multipart/form-data';
                    options.headers['Content-Disposition'] = body.getHeaders()['content-disposition'];
                    options.headers['Content-Length'] = body.getLengthSync().toString();
                    options.body = body;
                }
                else {
                    options.body = JSON.stringify(body);
                }
            }
            let response = yield (0, request_1.default)(url, options);
            if (response.status === 204) {
                return null;
            }
            let responseBody = yield response.json();
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(responseBody.message);
            }
            return responseBody;
        });
    }
    get(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(endpoint, 'GET', null);
        });
    }
    post(endpoint, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(endpoint, 'POST', body);
        });
    }
    put(endpoint, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(endpoint, 'PUT', body);
        });
    }
    delete(endpoint, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(endpoint, 'DELETE', body);
        });
    }
    patch(endpoint, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request(endpoint, 'PATCH', body);
        });
    }
}
exports.default = RestManager;
