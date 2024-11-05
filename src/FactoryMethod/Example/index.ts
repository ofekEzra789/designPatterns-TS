interface Transport {
    deliver(): void;
}

class Truck implements Transport {
    deliver(): void {
        console.log(`Transport by land (Truck)`);
    }
}

class Ship implements Transport {
    deliver(): void {
        console.log(`Transport by land (Ship)`);
    }
}

abstract class Logistics {
    transport: Transport | undefined = {};

    abstract createTransport(): void;

    abstract planDelivery(): void;

}

class RoadLogistic extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }

    planDelivery(): void {
        this.transport = this.createTransport();
        this.transport.deliver();
    }
}

class SeaLogistic extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }

    planDelivery(): void {
        this.transport = this.createTransport();
        this.transport.deliver();
    }
}

//////////////////////////

const roadLogistic = new RoadLogistic();
roadLogistic.planDelivery();

const seaLogistic = new SeaLogistic();
seaLogistic.planDelivery();