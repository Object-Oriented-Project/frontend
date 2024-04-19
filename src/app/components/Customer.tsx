export default class Customer {
    #name: string; // # is a private field => access with dot is not allowed
    #uid: string;
    
    constructor(name: string) {
        this.#name = name;
        this.#uid = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString()
    }
    public getName(): string {
        return this.#name;
    }

    public getUid(): string {
        return this.#uid;
    }

}