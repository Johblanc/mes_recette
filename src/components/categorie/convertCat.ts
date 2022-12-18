import { OriginalCat, Cat } from "../../Types/OriginalCat";



export function convertCat(category: OriginalCat): Cat {

    let result: Cat = {

        id          :  category. idCategory,
        categorie   :  category. strCategory,
        imageSource :  category. strCategoryThumb,
        description :  category. strCategoryDescription   
    }

    return result
}


