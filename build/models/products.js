"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cars = void 0;
class Cars {
    constructor(id, brand, name, variant, mileage, availability, price) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.variant = variant;
        this.mileage = mileage;
        this.availability = availability;
        this.price = price;
    }
    getID() {
        return this.id;
    }
    getBrand() {
        return this.brand;
    }
    getName() {
        return this.name;
    }
    getVariant() {
        return this.variant;
    }
    getMileage() {
        return this.mileage;
    }
    getAvailability() {
        return this.availability;
    }
    getPrice() {
        return this.price;
    }
}
exports.Cars = Cars;
