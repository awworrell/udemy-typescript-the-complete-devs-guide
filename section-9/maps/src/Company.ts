import faker from 'faker';

export class Company {
    companyName: string;
    catchphrase: string;
    location: {
        latitude: number,
        longitude: number
    };

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchphrase = faker.company.catchPhrase();
        
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }

    }

    markerContent(): string {
        return "CompanyName is " + this.companyName
    }
}