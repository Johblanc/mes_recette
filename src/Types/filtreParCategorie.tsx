export type FilterCatOrigine ={

          strMeal: string,
          strMealThumb: string,
          idMeal: string,

}

export type FilterCatRequestOrigine= {
     meals:FilterCatOrigine[]
}

export type FilterCat = {


    titre:string | null,
    photo:string | null,
    id:string | null,
}