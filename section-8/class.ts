class Vehicle {
    drive():void {
        console.log('move')
    }
    honk(): void {
        console.log('beep beep')
    }

}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();


class Car extends Vehicle {
    drive(): void {
        console.log('vroom');
    }
}