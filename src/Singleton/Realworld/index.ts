class Database {
    static #instance: Database;

    private constructor() {
    }

    public static get instance(): Database {
        if (!Database.#instance) {
            Database.#instance = new Database();
        }
        return Database.#instance;
    }

    public query(sql: string) {
        console.log(`Query: ${sql}`);
    }
}

class App {
    main() {
        const database1 = Database.instance;
        database1.query('selecting everything from database');

        const database2 = Database.instance;
        database2.query('selecting only 1 from database');
    }
}

const app = new App();
app.main();