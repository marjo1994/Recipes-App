import { useState } from "react"

export const MealTypeFilter = () => {

    const mealTypes = [
    'dessert', 'salad', 'breakfast', 'main course', 'snack',
    'drink']

    const [selectedMealTypes, setSelectedMealTypes] = useState<string[]>([])

    const toggleMealTypes = (meal: string) => {
        setSelectedMealTypes(prev => 
            prev.includes(meal) 
            ? prev.filter(item => item != meal)
            : [...prev, meal]
        )
    }

    return (
        <div>
            <span className="text-xl">By Meal Types</span>
            <div className="flex flex-wrap gap-2 mt-3">
               {mealTypes.map(meal => (
                <button
                    key={meal}
                    type="button"
                    onClick={() => toggleMealTypes(meal)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedMealTypes.includes(meal)
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                >
                    {meal.charAt(0).toUpperCase() + meal.slice(1)}
                </button>
                ))}
            </div>
        </div>
    )
}