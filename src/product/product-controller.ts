import { NextFunction ,Request,Response} from "express";
import { ProductService } from "./product-service";
import { validationResult } from "express-validator";
import createHttpError from "http-errors";
import { Product } from "./product-types";

export class ProductController{

    constructor(private productService:ProductService){}

    create= async (req: Request, res: Response, next: NextFunction)=>{
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return next(createHttpError(400, result.array()[0].msg as string));
        }
            const imageName='image.png'
            const {
                name,
                description,
                priceConfiguration,
                attributes,
                tenantId,
                categoryId,
                isPublish,
            } = req.body;

            const product = {
                name,
                description,
                priceConfiguration: JSON.parse(priceConfiguration as string),
                attributes: JSON.parse(attributes as string),
                tenantId,
                categoryId,
                isPublish,
                image: imageName,
            };


            const newProduct = await this.productService.createProduct(product);
    
            res.json({  newProduct:newProduct });
    
    }

}