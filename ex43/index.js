// Date: 27/12/2023
// Zeeshan Hassan
//
function myCar(manufacturer, modelName, otherInfo) {
    if (otherInfo) {
        var carInfo = {
            carManufacturer: manufacturer,
            carModel: modelName,
            miscInfo: otherInfo,
        };
        return carInfo;
    }
    else {
        var carInfo = {
            carManufacturer: manufacturer,
            carModel: modelName,
            miscInfo: otherInfo,
        };
        return carInfo;
    }
}
var myVehicle = myCar("Toyota", "Corolla");
console.log(myVehicle);
myVehicle = myCar("Toyota", "Corolla", { color: "Black", Year: 2012 });
console.log(myVehicle);
myVehicle = myCar("Suzuki", "Highroof");
console.log(myVehicle);
