// Singleton

class Kitchen {
    private static instance: Kitchen;
    private constructor() {}

    public static getInstance(): Kitchen {
        if (!Kitchen.instance) {
            Kitchen.instance = new Kitchen();
        }
        return Kitchen.instance;
    }

    public cook(): void {
        console.log('Cooking...');
    }

    public serve(): void {
        console.log('Serving...');
    }
}