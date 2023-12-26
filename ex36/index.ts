// Date: 26/12/2023
// Zeeshan Hassan

// Making the function of different cities and countries:-

function describe_city(city:string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Paris", "France");
describe_city("Tehran", "Iran");