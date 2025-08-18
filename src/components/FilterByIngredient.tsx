import type { IngredientsFilterProps } from "../types"

export const IngredientsFilter = ({ selectedIngredients, onIngredientsChange }: IngredientsFilterProps) => {

    const commonIngredients = [
    'chicken', 'beef', 'fish', 'pasta', 'rice',
    'tomato', 'cheese', 'garlic', 'onion', 'potato',
    'carrot', 'broccoli', 'mushroom', 'spinach', 'egg'
    ]

    const toggleIngredient = (ingredient: string) => {
        const newIngredients = selectedIngredients.includes(ingredient) 
        ? selectedIngredients.filter(item => item != ingredient)
        : [...selectedIngredients, ingredient]
        onIngredientsChange(newIngredients)
    }

    return (
        <div>
            <span className="text-xl">By ingredients</span>
            <div className="flex flex-wrap gap-2 mt-3">
               {commonIngredients.map(ingredient => (
                <button
                    key={ingredient}
                    type="button"
                    onClick={() => toggleIngredient(ingredient)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedIngredients.includes(ingredient)
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                </button>
                ))}
            </div>
        </div>
    )
}