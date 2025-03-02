import ProductModels from "./product-models";
import { Product } from "./product-types";

export class ProductService{
     async createProduct(product:Product){

            const newProduct=new ProductModels(product)

            return newProduct.save()
      }
}