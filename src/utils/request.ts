import currentFetch from "node-fetch";

let fetcher = window && window.fetch ? window.fetch : currentFetch;

export {
    fetcher as fetch,
};