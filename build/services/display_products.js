"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.display = display;
const search_products_1 = require("./search_products");
function display() {
    try {
        search_products_1.CarToDisplay.forEach((val) => {
            console.log(`Car-Name: ${val.getName()}`);
            console.log(`Car-Brand: ${val.getBrand()}`);
            console.log(`Car-Variant: ${val.getVariant()}`);
            console.log(`Mileage: ${val.getMileage()}`);
            console.log(`Price: ${val.getPrice()}`);
        });
    }
    catch (error) {
        console.error(error.message);
    }
}
