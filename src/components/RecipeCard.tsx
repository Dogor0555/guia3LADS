// RecipeCard Component
import { Recipe } from '../types/Recipe'

interface RecipeCardProps {
  recipe: Recipe
  isFavorite: boolean
  onToggleFavorite: (recipe: Recipe) => void
}

const RecipeCard = ({ recipe, isFavorite, onToggleFavorite }: RecipeCardProps) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col border border-purple-900">
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-pink-100">{recipe.strMeal}</h3>
        <div className="flex gap-2 mb-2">
          <span className="bg-purple-900 text-violet-200 text-xs px-2 py-1 rounded">
            {recipe.strCategory}
          </span>
          <span className="bg-slate-700 text-pink-200 text-xs px-2 py-1 rounded">
            {recipe.strArea}
          </span>
        </div>
        <p className="text-slate-300 mb-4 line-clamp-3 flex-grow">
          {recipe.strInstructions?.substring(0, 150)}...
        </p>
        <button
          onClick={() => onToggleFavorite(recipe)}
          className={`mt-auto px-4 py-2 rounded-md ${
            isFavorite ? 'bg-pink-700 hover:bg-pink-800' : 'bg-purple-700 hover:bg-purple-800'
          } text-violet-100 transition-colors`}
        >
          {isFavorite ? '★ Quitar favorito' : '☆ Agregar favorito'}
        </button>
      </div>
    </div>
  )
}

export default RecipeCard