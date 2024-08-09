import { CarList, update_after_delete } from "./add_products";
import { Cars } from "../models/products";
import { display } from "./display_products";
import exp from "constants";
import logger from "../Logger/logger";

var read = require('readline-sync')


let CarToDisplay: Cars[] = [];
function searchCar(search: string): void {
    try {
        const searched_car = CarList.find(c => c.getName() === search);

        if (!searched_car) {
            throw new Error("This car is not available.");
            logger.info("This car is not available.")
        }

        let var_search = read.question("Enter the car variant. Type P for Petrol or D for Diesel.");
        if (var_search != 'P' && var_search != 'D') {
            throw new Error("You have entered wrong variant.");
            logger.info("You have entered wrong variant.")
        }
        if (var_search === 'P') var_search = "Petrol";
        else var_search = "Diesel";


        for (let i = 0; i < CarList.length; i++) {
            if (CarList[i].getName() === search) {
                if (CarList[i].getVariant() === var_search) {
                    CarToDisplay.push(CarList[i]);
                }
            }
        }
        display();
        update_after_delete();
    } catch (error) {
        console.error((error as Error).message);
        logger.info((error as Error).message);
    }
}

let search = read.question("Enter the car name to search.");
searchCar(search);

export { CarToDisplay }