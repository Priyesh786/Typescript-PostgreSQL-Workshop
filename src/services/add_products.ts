import { Cars } from "../models/products";
import { CarToDisplay } from "./search_products";
import { display } from "./display_products";
import logger from "../Logger/logger";

let car2 = new Cars(2, "Maruti", "Alto", "Diesel", 20, 5, 12000);
let car3 = new Cars(3, "Hyundai", "Xcent", "Diesel", 22, 10, 13000);
let car1 = new Cars(1, "Maruti", "Alto", "Petrol", 15, 20, 10000);
let car4 = new Cars(4, "Hyundai", "Xcent", "Petrol", 18, 20, 11000);
let car5 = new Cars(5, "Mahindra", "Scorpio", "Diesel", 20, 25, 18000);
let car6 = new Cars(6, "Mahindra", "Scorpio", "Petrol", 16, 5, 14000);
let car7 = new Cars(7, "Maruti", "Baleno", "Diesel", 20, 10, 11500);
let car8 = new Cars(8, "Maruti", "Baleno", "Petrol", 15, 40, 9000);
let car9 = new Cars(9, "Hyundai", "i20", "Petrol", 17, 40, 10000);
let car10 = new Cars(10, "Hyundai", "i20", "Diesel", 21, 20, 12000);

let CarList = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
function update_after_delete(): void {
    try {
        CarList = CarList.filter(car => !CarToDisplay.find(displayCar => displayCar.getID() === car.getID()));
    } catch (error) {
        console.error((error as Error).message);
        logger.info((error as Error).message);

    }
}

export { CarList, update_after_delete };