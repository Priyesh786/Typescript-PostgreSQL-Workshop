export class Cars {
    private id: number;
    private name : string;
    private brand : string;
    private variant : string;
    private mileage : number;
    private availability: number;
    private price: number;

    constructor(id: number, brand: string, name: string, variant: string, mileage: number, availability: number, price: number) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.variant = variant;
        this.mileage = mileage;
        this.availability = availability;
        this.price = price;
    }

    getID(): number {
        return this.id;
    }
    getBrand(): string {
        return this.brand;
    }
    getName(): string {
        return this.name;
    }
    getVariant(): string {
        return this.variant;
    }
    getMileage(): number {
        return this.mileage;
    }
    getAvailability(): number {
        return this.availability;
    }
    getPrice(): number {
        return this.price;
    }
}