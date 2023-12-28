// Date: 27/12/2023
// Zeeshan Hassan

//

function myCar(manufacturer, modelName, otherInfo?: object) {
  if (otherInfo) {
    const carInfo = {
      carManufacturer: manufacturer,
      carModel: modelName,
      miscInfo: otherInfo,
    };
    return carInfo;
  } else {
    const carInfo = {
      carManufacturer: manufacturer,
      carModel: modelName,
      miscInfo: otherInfo,
    };
    return carInfo;
  }
}

let myVehicle = myCar("Toyota", "Corolla");
console.log(myVehicle);
myVehicle = myCar("Toyota", "Corolla", {color: "Black", Year: 2012});
console.log(myVehicle);
myVehicle = myCar("Suzuki", "Highroof");
console.log(myVehicle);
