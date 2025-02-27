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
        this.getOne=this.getOne.bind(this)
        this.index=this.index.bind(this)
    }

  async  create(req:Request,res:Response,next:NextFunction){

        const result=validationResult(req)

        if(!result.isEmpty()){
            return next(createHttpError(400,result.array()[0].msg))
        }
        const {name,priceConfiguration,attributes}=req.body as Category


       const category = await this.categoryService.create({name,priceConfiguration,attributes});

        this.logger.info(`Created category`,{id:category.id})

           res.json({categoryId:category.id})
    }

   async getOne(req:Request,res:Response,next:NextFunction){
        const  {id} =  req.params;

       const category=  await this.categoryService.getOne(id)

       this.logger.info(`Getting Category List`)

       res.json(category)
    }

    async index(req:Request,res:Response,next:NextFunction){

       const categorys= await this.categoryService.getAll()

       this.logger.info(`Getting Category List`)

       res.json(categorys)
    }
}