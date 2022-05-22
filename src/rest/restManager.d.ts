export declare type optionForRequest = {
    method: string;
    headers: {
        'Content-Type'?: string;
        'Authorization': string;
        'User-Agent': string;
        'Content-Length'?: string;
        'Content-Disposition'?: string;
    };
    body?: any;
};
export default class RestManager {
    private baseURL;
    private token;
    private version;
    private headers;
    constructor(token: string, version?: number);
    private request;
    get(endpoint: string): Promise<any>;
    post(endpoint: string, body: any): Promise<any>;
    put(endpoint: string, body: any): Promise<any>;
    delete(endpoint: string, body: any): Promise<any>;
    patch(endpoint: string, body: any): Promise<any>;
}
