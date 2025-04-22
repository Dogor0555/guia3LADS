import { useState, useEffect } from 'react'
import useFetchData from '../hooks/useFetchData'
import useNotification from '../hooks/useNotification'
import RecipeCard from '../components/RecipeCard'
import FilterPanel from '../components/FilterPanel'
import { Recipe } from '../types/Recipe'
import LoadingSpinner from '../components/LoadingSpinner'

const Home = () => {
  const { data, loading, error } = useFetchData<{ meals: Recipe[] }>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  const { notify } = useNotification()
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [favorites, setFavorites] = useState<Recipe[]>(() => {
    const saved = localStorage.getItem('favoriteRecipes')
    return saved ? JSON.parse(saved) : []
  })

  const categories = Array.from(new Set(data?.meals?.map(recipe => recipe.strCategory) || []))

  const filteredRecipes = data?.meals?.filter(recipe => {
    if (activeFilters.length === 0) return true
    return activeFilters.includes(recipe.strCategory)
  }) || []

  const toggleFavorite = (recipe: Recipe) => {
    const isFavorite = favorites.some(fav => fav.idMeal === recipe.idMeal)
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.idMeal !== recipe.idMeal)
      setFavorites(updatedFavorites)
      notify(`${recipe.strMeal} removida de favoritos`, 'info')
    } else {
      setFavorites([...favorites, recipe])
      notify(`${recipe.strMeal} agregada a favoritos`, 'success')
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favorites))
  }, [favorites])

  const toggleFilter = (category: string) => {
    setActiveFilters(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  if (loading) return <LoadingSpinner fullScreen message="Cargando recetas..." />
  if (error) return <div className="text-center py-8 text-red-400 bg-slate-800 p-4 rounded-lg">{error}</div>

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-pink-100">Catálogo de Recetas</h1>
      
      <FilterPanel
        categories={categories}
        activeFilters={activeFilters}
        onToggleFilter={toggleFilter}
      />

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-8 text-violet-200 bg-slate-800 p-6 rounded-lg shadow-md">
          No se encontraron recetas para los filtros seleccionados
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
              isFavorite={favorites.some(fav => fav.idMeal === recipe.idMeal)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home