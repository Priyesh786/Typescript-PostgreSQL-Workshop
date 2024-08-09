import logger from "../Logger/logger";
import { CarToDisplay } from "./search_products";

function display() {
   try {
      CarToDisplay.forEach((val) => {
         console.log(`Car-Name: ${val.getName()}`);
         logger.info(`Car-Name: ${val.getName()}`);
         console.log(`Car-Brand: ${val.getBrand()}`);
         logger.info(`Car-Brand: ${val.getBrand()}`);
         console.log(`Car-Variant: ${val.getVariant()}`);
         logger.info(`Car-Variant: ${val.getVariant()}`);
         console.log(`Mileage: ${val.getMileage()}`);
         logger.info(`Mileage: ${val.getMileage()}`);
         console.log(`Price: ${val.getPrice()}`);
         logger.info(`Price: ${val.getPrice()}`);
      })
   } catch (error) {
      console.error((error as Error).message);
      logger.info((error as Error).message);

   }
}
export { display };