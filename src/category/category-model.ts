import mongoose from "mongoose";

interface PriceConfiguration{
   [key:string]:{
      priceType:'base' | 'adiitional';
      availableOptions:string[];
   }
}
interface Attributes{
    name:string;
    widgetType:'switch' | 'radio'
    defaultValue:string;
    availableOptions:string[];
}

export interface Category{
    name:string;
    priceConfiguration:PriceConfiguration
    attributes:Attributes[]

}

const priceConfigurationSchema=new mongoose.Schema<PriceConfiguration>({
          priceType:{
            type:String,
            enum:['base','additional'],
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

export default mongoose.model('category',categoryschema)