export type OriginalCat = {
  idCategory: string,
  strCategory: string,
  strCategoryThumb: string | null,
  strCategoryDescription: string|null,
}
export type TOriginalRequestCat = {
  category: OriginalCat[]
}

export type Cat = {

  id         :    string,
  categorie  :    string,
  imgSrc     :    string | null,
  description:    string | null

}