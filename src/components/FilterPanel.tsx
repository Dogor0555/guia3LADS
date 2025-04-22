// FilterPanel Component
interface FilterPanelProps {
    categories: string[]
    activeFilters: string[]
    onToggleFilter: (category: string) => void
  }
  
  const FilterPanel = ({ categories, activeFilters, onToggleFilter }: FilterPanelProps) => {
    return (
      <div className="bg-slate-800 p-4 rounded-lg mb-6 sticky top-6 shadow-md border border-purple-800">
        <h3 className="text-lg font-semibold mb-3 text-violet-200">Filtrar por categoría</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onToggleFilter(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                activeFilters.includes(category)
                  ? 'bg-purple-700 text-pink-100'
                  : 'bg-slate-700 text-violet-200 border border-purple-600 hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    )
  }
  
  export default FilterPanel
  