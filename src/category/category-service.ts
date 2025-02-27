import categoryModel from "./category-model";
import CategoryModel from "./category-model";
import { Category } from "./categoty-types";

export  class CategoryService{
   async  create(category:Category){
    const newCategory= new CategoryModel(category)

    return newCategory.save()
     }

  async getOne(categoryId:string){
       return categoryModel.findOne({_id:categoryId})
  }

  async getAll(){
        return categoryModel.find()
  }

  async update(
   categoryId: string,
   updateData: Partial<Category>,
): Promise<({ _id: string } & Category) | null> {
   return await categoryModel.findByIdAndUpdate(
       categoryId,
       { $set: updateData },  // Only updates the specified fields
       { new: true },         // Returns the updated document
   );
}

}


