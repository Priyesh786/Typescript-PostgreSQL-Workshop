"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarToDisplay = void 0;
const add_products_1 = require("./add_products");
const display_products_1 = require("./display_products");
const logger_1 = __importDefault(require("../Logger/logger"));
var read = require('readline-sync');
let CarToDisplay = [];
exports.CarToDisplay = CarToDisplay;
function searchCar(search) {
    try {
        const searched_car = add_products_1.CarList.find(c => c.getName() === search);
        if (!searched_car) {
            throw new Error("This car is not available.");
            logger_1.default.info("This car is not available.");
        }
        let var_search = read.question("Enter the car variant. Type P for Petrol or D for Diesel.");
        if (var_search != 'P' && var_search != 'D') {
            throw new Error("You have entered wrong variant.");
            logger_1.default.info("You have entered wrong variant.");
        }
        if (var_search === 'P')
            var_search = "Petrol";
        else
            var_search = "Diesel";
        for (let i = 0; i < add_products_1.CarList.length; i++) {
            if (add_products_1.CarList[i].getName() === search) {
                if (add_products_1.CarList[i].getVariant() === var_search) {
                    CarToDisplay.push(add_products_1.CarList[i]);
                }
            }
        }
        (0, display_products_1.display)();
        (0, add_products_1.update_after_delete)();
    }
    catch (error) {
        console.error(error.message);
        logger_1.default.info(error.message);
    }
}
let search = read.question("Enter the car name to search.");
searchCar(search);
