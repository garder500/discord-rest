import currentFetch from "node-fetch";

let fetcher = (url: string, options: any) => {
    if(typeof window !== 'undefined'){
        return window.fetch(url, options);
    }else{
        return currentFetch(url, options);
    }
}


export default fetcher;