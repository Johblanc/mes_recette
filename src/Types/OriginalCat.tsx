export type OriginalCat = {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string | null,
  strCategoryDescription: string | null
}
export type TOriginalRequestCat = {
  categories: OriginalCat[]
}

export type Cat = {

  id: string,
  categorie: string,
  imageSource: string | null,
  description: string | null

}