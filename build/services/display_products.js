"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.display = display;
const logger_1 = __importDefault(require("../Logger/logger"));
const search_products_1 = require("./search_products");
function display() {
    try {
        search_products_1.CarToDisplay.forEach((val) => {
            console.log(`Car-Name: ${val.getName()}`);
            logger_1.default.info(`Car-Name: ${val.getName()}`);
            console.log(`Car-Brand: ${val.getBrand()}`);
            logger_1.default.info(`Car-Brand: ${val.getBrand()}`);
            console.log(`Car-Variant: ${val.getVariant()}`);
            logger_1.default.info(`Car-Variant: ${val.getVariant()}`);
            console.log(`Mileage: ${val.getMileage()}`);
            logger_1.default.info(`Mileage: ${val.getMileage()}`);
            console.log(`Price: ${val.getPrice()}`);
            logger_1.default.info(`Price: ${val.getPrice()}`);
        });
    }
    catch (error) {
        console.error(error.message);
        logger_1.default.info(error.message);
    }
}
