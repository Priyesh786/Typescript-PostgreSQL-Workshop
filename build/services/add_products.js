"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarList = void 0;
exports.update_after_delete = update_after_delete;
const products_1 = require("../models/products");
const search_products_1 = require("./search_products");
let car2 = new products_1.Cars(2, "Maruti", "Alto", "Diesel", 20, 5, 12000);
let car3 = new products_1.Cars(3, "Hyundai", "Xcent", "Diesel", 22, 10, 13000);
let car1 = new products_1.Cars(1, "Maruti", "Alto", "Petrol", 15, 20, 10000);
let car4 = new products_1.Cars(4, "Hyundai", "Xcent", "Petrol", 18, 20, 11000);
let car5 = new products_1.Cars(5, "Mahindra", "Scorpio", "Diesel", 20, 25, 18000);
let car6 = new products_1.Cars(6, "Mahindra", "Scorpio", "Petrol", 16, 5, 14000);
let car7 = new products_1.Cars(7, "Maruti", "Baleno", "Diesel", 20, 10, 11500);
let car8 = new products_1.Cars(8, "Maruti", "Baleno", "Petrol", 15, 40, 9000);
let car9 = new products_1.Cars(9, "Hyundai", "i20", "Petrol", 17, 40, 10000);
let car10 = new products_1.Cars(10, "Hyundai", "i20", "Diesel", 21, 20, 12000);
let CarList = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
exports.CarList = CarList;
function update_after_delete() {
    exports.CarList = CarList = CarList.filter(car => !search_products_1.CarToDisplay.find(displayCar => displayCar.getID() === car.getID()));
}
