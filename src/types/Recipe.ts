export interface Recipe {
    idMeal: string
    strMeal: string
    strMealThumb: string
    strCategory: string
    strArea: string
    strInstructions: string | null
    [key: string]: string | null
  }