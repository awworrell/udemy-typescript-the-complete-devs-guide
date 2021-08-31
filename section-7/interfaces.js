;
var oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary: function () {
        return this.name;
    }
};
var printVehicle = function (vehicle) {
    console.log("Name: " + vehicle.name);
    console.log("Year: " + vehicle.year);
    console.log("Broken: " + vehicle.broken);
    console.log("Summary: " + vehicle.summary());
};
printVehicle(oldCivic);
