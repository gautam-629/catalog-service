import {Request,NextFunction,Response} from 'express'
import { validationResult } from 'express-validator'
import createHttpError from 'http-errors'
import { Category } from './categoty-types'
import { CategoryService } from './category-service'
import { Logger } from 'winston'
export class CategoryController{

    constructor(
        private categoryService:CategoryService,
        private logger:Logger
    ){
        this.create=this.create.bind(this)
    }

  async  create(req:Request,res:Response,next:NextFunction){

        const result=validationResult(req)

        if(!result.isEmpty()){
            return next(createHttpError(400,result.array()[0].msg))
        }
        const {name,priceConfiguration,attributes}=req.body as Category


       const category = await this.categoryService.create({name,priceConfiguration,attributes});

        this.logger.info(`Created category`,{id:category.id})

           res.json({message:'success'})
    }
}