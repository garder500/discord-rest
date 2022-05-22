import currentFetch from "node-fetch";
declare let fetcher: typeof currentFetch | (((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof fetch);
export default fetcher;
