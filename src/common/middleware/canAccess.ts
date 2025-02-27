import { NextFunction, Request, Response } from "express"
import createHttpError from "http-errors"

interface AuthRequest extends Request{
    auth:{
        id: string
        role:string
    }
}

export const canAccess=(roles:string[])=>{
  
    return  (req:Request,res:Response,next:NextFunction)=>{
        const _req=req as AuthRequest;
        const rolefromToken=_req.auth.role

        if(!roles.includes(rolefromToken)){
           return next(createHttpError(403,"You don't have enough permissions"))
        }

        next()
    }

}