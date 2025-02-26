import CategoryModel from "./category-model";
import { Category } from "./categoty-types";

export  class CategoryService{
   async  create(category:Category){
    const newCategory= new CategoryModel(category)

    return newCategory.save()
     }
}