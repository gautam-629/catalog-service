import mongoose from "mongoose";
import { PriceConfiguration,Attributes,Category } from "./categoty-types";

const priceConfigurationSchema=new mongoose.Schema<PriceConfiguration>({
          priceType:{
            type:String,
            enum:['base','adiitional'],
            required:true
          },
          availableOptions:{
             type:[String],
             required:true
          }
})

const attributesSchema=new mongoose.Schema<Attributes>({
       name:{
        type:String,
        required:true
       },
       widgetType:{
        type:String,
        enum:['switch','radio']
       },
       defaultValue:{
        type:mongoose.Schema.Types.Mixed,
        required:true
       },
       availableOptions:{
        type:[String],
        required:true
       }
})

const categoryschema=new mongoose.Schema<Category>({
    name:{
        type:String,
        required:true
    },

    priceConfiguration:{
        type:Map,
        of:priceConfigurationSchema,
        required:true,
    },
   attributes:[attributesSchema]
})

export default mongoose.model('Category',categoryschema)