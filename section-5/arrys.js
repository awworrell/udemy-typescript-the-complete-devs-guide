var carMarkers = ['ford', 'toyota', 'string'];
var CarMakers = [];
var dates = [new Date(), new Date()];
var carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
var moreCarsByMake = [];
//Help with inference when extracting values
var car = carMarkers[0];
var myCar = carMarkers.pop();
console.log("Car is :" + car);
console.log("My car is : " + myCar);
//Prevent incompatible values
carMarkers.push("mini");
console.log(carMarkers);
//help with 'map
carMarkers.map(function (car) {
    return car;
});
//flexible types
var importantDates = [new Date()];
console.log(importantDates);
importantDates.push('2030-10-10');
console.log(importantDates);
