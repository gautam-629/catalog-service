import  express from "express";
import { ProductService } from "./product-service";
import { ProductController } from "./product-controller";
import { asyncWrapper } from "../common/async-wrapper";
import authenticate from "../common/middleware/authenticate";
import { canAccess } from "../common/middleware/canAccess";
import { Roles } from "../common/constants";
import createProductValidator from "./create-product-validator";
import fileUpload from "express-fileupload";

const router=express.Router()

const productService=new ProductService();
const productController=new ProductController(productService)
router.post('/',authenticate,
    canAccess([Roles.ADMIN, Roles.MANAGER]),fileUpload(),createProductValidator,asyncWrapper(productController.create))

export default router;