export default class Customer {
    #name: string; // # is a private field => access with dot is not allowed
    #uid: string;
    
    constructor(name: string) {
        this.#name = name;
        this.#uid = Math.random().toString(36).substring(5);
    }
    public getName(): string {
        return this.#name;
    }

    public getUid(): string {
        return this.#uid;
    }

}