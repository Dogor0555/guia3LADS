import { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'
import { Recipe } from '../types/Recipe'

const Favorites = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('favoriteRecipes')
    if (saved) {
      setFavorites(JSON.parse(saved))
    }
  }, [])

  if (favorites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-6 text-pink-100">Mis Recetas Favoritas</h1>
        <p className="text-violet-300">No tienes recetas favoritas aún</p>
        <div className="mt-8 flex justify-center">
          <a href="/" className="px-6 py-3 bg-purple-800 text-violet-100 rounded-lg hover:bg-purple-700 transition-colors">
            Explorar recetas
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-pink-100">Mis Recetas Favoritas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(recipe => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            isFavorite={true}
            onToggleFavorite={(r) => {
              const updated = favorites.filter(fav => fav.idMeal !== r.idMeal)
              setFavorites(updated)
              localStorage.setItem('favoriteRecipes', JSON.stringify(updated))
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites