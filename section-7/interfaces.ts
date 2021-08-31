
interface Vehicle {
    name: string,
    year: number,
    broken: boolean
    summary(): string;
};

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return this.name;
    }
};

const printVehicle = (vehicle: Vehicle): void => {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken: " + vehicle.broken);
    console.log("Summary: " + vehicle.summary());
};

printVehicle(oldCivic);