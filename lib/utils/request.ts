import currentFetch, { RequestInit as RequestFetch, Response } from "node-fetch";

const fetch = (url: string, options: RequestFetch): Promise<Response> =>{
    return currentFetch(url, options);
};


export default fetch;