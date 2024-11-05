// * Need: Create different database connectors and be able to switch the
// * connector with an environment variable
// *
// * Solution: Create an abstract class with a factory method that returns a
// * concrete implementation of a database connection


abstract class DBConnectionFactory {
    abstract createDBConnection(): DBConnection;
}

class MongoDBConnectionFactory extends DBConnectionFactory {
    createDBConnection(): DBConnection {
        return new MongoConnection();
    }
}

class RedisConnectionFactory extends DBConnectionFactory {
    createDBConnection(): DBConnection {
        return new RedisConnection();
    }
}

abstract class DBConnection {
    provider: string;

    public connect() {
        console.log(`Connected to ${this.provider}`);
    }
}

class MongoConnection extends DBConnection {
    provider: string;

    constructor() {
        super();
        this.provider = 'Mongo DB';
    }
}

class RedisConnection extends DBConnection {
    provider: string;

    constructor() {
        super();
        this.provider = 'Redis';
    }
}

function main(dbConnectionFactory: DBConnectionFactory) {
    const dbConnection = dbConnectionFactory.createDBConnection();
    dbConnection.connect();
}

switch (process.env.DB) {
    case 'Mongo':
        main(new MongoDBConnectionFactory());
        break;
    case 'Redis':
        main(new RedisConnectionFactory());
        break;
    default:
        console.error('Unknown DB');
}