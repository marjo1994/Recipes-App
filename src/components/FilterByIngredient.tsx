import { useState } from "react"

export const IngredientsFilter = () => {

    const commonIngredients = [
    'chicken', 'beef', 'fish', 'pasta', 'rice',
    'tomato', 'cheese', 'garlic', 'onion', 'potato',
    'carrot', 'broccoli', 'mushroom', 'spinach', 'egg'
    ]

    const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

    const toggleIngredient = (ingredient: string) => {
        setSelectedIngredients(prev => 
            prev.includes(ingredient) 
            ? prev.filter(item => item != ingredient)
            : [...prev, ingredient]
        )
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