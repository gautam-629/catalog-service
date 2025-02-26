import express from 'express'
import { CategoryController } from './category-controller';
import categoryValidator from './category-validator';
import { CategoryService } from './category-service';
import logger from '../config/logger';
import { asyncWrapper } from '../common/async-wrapper';
import authenticate from '../common/middleware/authenticate';
import { canAccess } from '../common/middleware/canAccess';
import { ROLE } from './categoty-types';


const router=express.Router();

const categoryService=new CategoryService()

const categoryController=new CategoryController(categoryService,logger);

router.post('/',categoryValidator,authenticate,canAccess([ROLE.ADMIN]) , asyncWrapper(categoryController.create))


export default router