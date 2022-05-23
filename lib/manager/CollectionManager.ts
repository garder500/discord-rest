
export default class CollectionManager {
    cache: Map<string, any>;
    constructor(){
        this.cache = new Map();
    }

    public add(key: string, value: any): void {
        this.cache.set(key, value);
    }
    public remove(key: string): void {
        this.cache.delete(key);
    }
    public get(key: string): any {
        return this.cache.get(key);
    }
    public clear(): void {
        this.cache.clear();
    }

    public map(callback: (value: any, key: string, map: Map<string, any>) => any): Map<string, any> {
        let newMap = new Map();
        this.cache.forEach((value, key) => {
            newMap.set(key, callback(value, key, this.cache));
        });
        return newMap;
    }

    public find(callback: (value: any, key: string, map: Map<string, any>) => boolean): any {
        for (let [key, value] of this.cache) {
            if (callback(value, key, this.cache)) {
                return value;
            }
        }
        return null;
    }

    public filter(callback: (value: any, key: string, map: Map<string, any>) => boolean): Map<string, any> {
        let newMap = new Map();
        this.cache.forEach((value, key) => {
            if (callback(value, key, this.cache)) {
                newMap.set(key, value);
            }
        });
        return newMap;
    }

    public entries(): IterableIterator<[string, any]> {
        return this.cache.entries();
    }

    public keys(): IterableIterator<string> {
        return this.cache.keys();
    }

    public values(): IterableIterator<any> {
        return this.cache.values();
    }

    public get size(): number {
        return this.cache.size;
    }

    public has(key: string): boolean {
        return this.cache.has(key);
    }

    public delete(key: string): boolean {
        return this.cache.delete(key);
    }

    public first(): any {
        return this.cache.values().next().value;
    }

} 