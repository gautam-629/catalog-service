
export interface PriceConfiguration{
   [key:string]:{
      priceType:'base' | 'adiitional';
      availableOptions:string[];
   }
}
export interface Attributes{
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


export enum ROLE{
   ADMIN="admin",
   MANAGER="manager"
}