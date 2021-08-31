const carMarkers = ['ford', 'toyota', 'string'];

const CarMakers: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

const moreCarsByMake: string[][] = [];

//Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();
console.log ("Car is :" + car)
console.log("My car is : " + myCar);

//Prevent incompatible values

carMarkers.push("mini");
console.log(carMarkers);

//help with 'map
carMarkers.map((car: string): string => {
    return car;
});

//flexible types
const importantDates: (Date | String)[] = [new Date()];
console.log(importantDates);
importantDates.push('2030-10-10');
console.log(importantDates);