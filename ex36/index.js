// Date: 26/12/2023
// Zeeshan Hassan
// Making the function of different cities and countries:-
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Paris", "France");
describe_city("Tehran", "Iran");
