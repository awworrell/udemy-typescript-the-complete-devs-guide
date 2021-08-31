import faker, { fake } from 'faker';

export class User {
    name: string;
    location: {
        latitude: number,
        longitude: number
    }
    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        };
        

    }

    markerContent(): string {
        return "User " + this.name
    }
};
