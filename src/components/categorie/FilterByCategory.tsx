import { useEffect, useState } from 'react';
import { Cat, OriginalCat } from "../../Types/OriginalCat";

export function searchByCategory(genre: OriginalCat): Cat {

    let result: Cat = {

        id: genre.idCategory,
        categorie: genre.strCategory,
        imgSrc: genre.strCategoryThumb,
        description: genre.strCategoryDescription

    }
    console.log("genre:",genre);
    console.log("result :",result);
    
    

    return result;
}